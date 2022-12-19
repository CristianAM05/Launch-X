# Proyecto en React

## TODO APP

Partí con la base de un proyecto en blanco de React.js, lo modifique y cree algunos componentes:

Para el App.js solo modifique la funcion principal y agregue un contenedor que almacenara los demas componentes

#### App.js
```JavaScript
import './App.scss';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h3>LISTA DE TAREAS</h3>
      <div>
        <Container />
      </div>
    </div>
  );
}

export default App;
```

Cree una carpeta de componentes con los sigientes archivos:

#### /components/Container.jsx
```JavaScript
import React from "react";
import { useState } from "react";
import FormToDo from './FormToDo';
import TaskList from './TaskList';

const Container = () => {
    const [list, setList] = useState([]);
    
    const addItem = addItem => {
        setList([...list, addItem])
    };
    return (
        <div>
            <FormToDo addItem={addItem}/>
            <TaskList list={list} setList={setList} />
        </div>
    );
}
```

#### /components/FormToDo.jsx
```JavaScript
import React from "react";
import { useState } from "react";

const FormToDo = props =>{
    const [description, setDescription]= useState("");
    const {addItem} = props;

    const manejarSubmit = e => {
        e.preventDefault();
        console.log(description);
        console.log((new Date()).toString());
        addItem({
            done: false,
            id: (new Date()).toString(),
            description
        });
        setDescription("");
    }

    return (
        <form onSubmit={manejarSubmit}>
            <div className="todo-list">
                <div className="file-input">
                    <input 
                        type="text"
                        className="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <button
                        className="button blue"
                        disabled={description ? "":"disabled"}//Es lo mismo que un if: si esta vacio disabled sino ""
                    >Agregar tarea</button>
                </div>
            </div>
        </form>
    );
}

export default FormToDo;
```

#### /components/TaskList.jsx
```JavaScript
import React from "react";
import CheckBox from './CheckBox';

const TaskList = props => {
    const {list, setList} = props;

    const onChangeStatus = e => {
        const {name, checked} = e.target;
        const updateList = list.map(item => ({
            ... item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    };

    const removeItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };

    const checkbox = list.map(item =>(
        <CheckBox key={item.id} data={item} onChange={onChangeStatus} />
    ));

    return (
        <div className="todo-list">
            {list.length ? checkbox : "No hay tareas"}
            {list.length ? (
                <p>
                    <button className="button red" onClick={removeItem}>Borrar</button>
                </p>
            ) :null}
        </div>
    );
}

export default TaskList;
```

#### /components/CheckBox.jsx
```JavaScript
import React, { Fragment } from "react";

const CheckBox = props => {
    const {
        onChange,
        data: {id, description, done}
    } = props;

    return (<Fragment>
        <label className="todo new-item">
            <input
                className="todo_state"
                name={id}
                type="checkbox"
                defaultChecked={done}
                onChange={onChange}></input>
                <div className="todo-text">{description}</div>
        </label>
    </Fragment>);
}

export default CheckBox;
```

Cambie el App.css por App.scss con el fin de utilizar las caracteristicas de Sass

#### App.scss
```scss
html{
  background: whitesmoke;
  height: 100%;
  display: flex;
}

body{
  width: 100%;
  margin: auto;
}

.App{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
}

.todo-list{
  background: #eee;
  font-size: 18px;
  max-width: 300px;
  margin: auto;
  margin-bottom: 24px;
  padding: 8px 16px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
}

$colorAzul: #caf0f8;
$colorAzulArriba: #90e0ef;

$colorRojo: red;
$colorRojoArriba: #d00000;

$colorTexto: black ;
$colorTextoChecked: #2b9348;


@mixin button($class, $color, $colorHover) {
  .button.#{$class}{background: $color;}
  .button.#{$class}{border-color: $colorHover;}
  .button.#{$class}:hover{background: $colorHover;}
  .button.#{$class}:active{background: $color;}
}

.button{
  margin: 0px 3px;
  color: $colorTexto;
  border-radius: 10px;
}

@include button ('blue', $colorAzul, $colorAzulArriba);
@include button ('red', $colorRojo, $colorRojoArriba);


.todo {
  display: block;
  position: relative;
  padding: 1%;
  margin: 0 auto;
  cursor: pointer;
  border-bottom: solid 1px #ddd;
}

//animacion aparecer de derecha a exquierda
.todo.new-item {
  opacity: 0;
  transform: translateX(100px);//de donde parte
  animation: fadeIn .3s linear forwards;
}

@keyframes fadeIn {
  to {
    transform: translateX(0px);//a donde termina
    opacity: 1;
  }
}

.todo_state {
  position: absolute;
  top: 5%;
  bottom: 5%;
  left: 0px;
}

.todo-text {
  width: 279px;
  position: relative;
  left: 15px;
  margin: 0px;
}

.todo_state:checked {
  ~ .todo-text {
    color: $colorTextoChecked;
    transition-delay: 0.2s;
  }
}
```