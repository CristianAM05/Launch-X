# Primer Ejercicio en React

## Reloj

Partí con la base de un proyecto en blanco de React App y modifique el App.js y el index.js

Para el App.js modifique la funcion principal, deje el logo y agregue la funcion para mostrar la hora actual en distintos paises.

#### App.js
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  let horaLocal = new Date();
  let qatar = new Date(horaLocal.getTime() + (3600000*8));
  let cdmx = new Date(horaLocal.getTime() - (3600000*1));

  const elemento =(
    <div className="App">
      <header className="App-header">
        <h1>HOLA MUNDO...!!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <fieldset>
          <legend><h2>Horarios actuales</h2></legend>
          La hora en Colombia es: {new Date().toLocaleTimeString('en')} <br></br>
          La hora en Ciudad de Mexico es: {cdmx.toLocaleTimeString('en')} <br></br>
          La hora en New York es: {new Date().toLocaleTimeString('en')} <br></br>
          La hora en Qatar es: {qatar.toLocaleTimeString('en')}
        </fieldset>
      </header>
    </div>
  );
  root.render(elemento);
}

export default App;
```

El index.js se utilizo para actualizar la funcion del reloj y muestre la hora actualizada.

#### index.js
```JavaScript
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

setInterval(App, 1000);

reportWebVitals();
```

#### Resultado obtenido:

[![Reloj-React.png](https://i.postimg.cc/x8xhctqv/Reloj-React.png)](https://postimg.cc/7JzmR13h)