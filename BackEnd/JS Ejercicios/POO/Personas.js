//Polimorfismo

function Persona(nombre) {
    this.nombre = nombre;
    this.caminar = function () {
        console.log("Caminando");
    }
}

function Estudiante(nombre, estado) {
    Persona.call(this, nombre);
    this.estado = estado;
    this.caminar = function () {
        console.log("Caminando y sufriendo");
    }
}

Estudiante.prototype=Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

let estudiante1 = new Estudiante("Paul", "estudiando");
let persona1 = new Persona("Lionel");

estudiante1.caminar();
persona1.caminar();