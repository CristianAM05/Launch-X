//  ESTRUCTURAS DE CONTROL

for (let i = 0; i < 13; i++) {
    if (i%2 != 0) {
        continue;
    }
    if (i===8) {
        break;
    }
    console.log(i);
}

console.log("salio del for");

var1 = null; //no existe
//var2 = empty; vacio
var3 = "" //string en blanco
var4 = 0; 
var5 = false;
var6 = undefined;//no esta definida la variable

console.log(var1);
//console.log(var2);
console.log(var3);
console.log(var4);
console.log(var5);
console.log(var6);