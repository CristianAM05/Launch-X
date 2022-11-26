//  OPERADORES

let lista =[]//operador de asignacion
let x = 5; 
let y = 3;

lista.push(x)//llenar lista
lista.push(y)


x += y; // asignacion de adicion -> x = x+y
console.log(x);
lista.push(x)
y -= x; // asignacion de resta
console.log(y);
lista.push(y)
x *= y; // asignacion de multiplicacion
console.log("X = "+x);
lista.push(x)

x = 5;
y = 3;
x <<= y; // operador de bit a bit de desplazamiento a la izquierda
console.log("X = "+x);
lista.push(x)

x = 13;
y = 2;
console.log("modulo: " + (x % y)); //operador de modulo
lista.push(x)

console.log(lista);

// Estructura de control if

let var1 = 3;
let var2 = 4;

if (var1 == '3') {//igual a
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}

if (var1 === '3') {//extrictamente igual a
    console.log("Son iguales");
}else{
    console.log("Son diferentes");
}

if (var2 != var1) {//diferente a
    console.log("Son diferentes");
}else{
    console.log("Son iguales");
}

if (var2 !== '4') {//extrictamente diferente a
    console.log("Son diferentes");
}else{
    console.log("Son iguales");
}

console.log(var1 <= var2);
