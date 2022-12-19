let nombres ={
    nombre: "Andres",
    apellido: "Martínez"
};

console.log(nombres.apellido);
console.log(nombres.hasOwnProperty("telefonos"));

console.log(nombres);

function perro(nombre, edad) {
    perro.nombre = nombre;
    perro.edad = edad;
};

perro.prototype.habla = function () {
    return "Guau Guau Gente";
};

let firulais = new perro("Firulais", 4);
console.log(firulais);
console.log(firulais.habla);
