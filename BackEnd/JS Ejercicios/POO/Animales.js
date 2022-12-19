class Animales {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    #especie = "Felis Catus";//privado

    canta() {
        return `${this.nombre} puede cantar`;
    }
    correr() {
        return `${this.nombre} puede correr`;
    }
    anios() {
        return `Tengo ${this.edad} años`
    }
    getEspecie() {
        return this.#especie;
    }
};

class Gatos extends Animales { //herencia
    constructor(nombre, edad, colorPelos){
        super(nombre, edad);//habilitar atributos
        this.colorPelos = colorPelos;
    }
    pelaje() {
        return `Tengo pelaje de color ${this.colorPelos}`;
    }
    especie() {
        return `Soy un ${this.getEspecie()}`;
    }
};

let animal = new Animales("Gato",5);
let gato = new Gatos("Missi", 2, "Blanco");
console.log(gato.pelaje());
console.log(gato.getEspecie());