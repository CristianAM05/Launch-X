//  ESTRUCTURAS DE CONTROL

// Ciclo for
console.log("   CICLO FOR:");
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

console.log("_______________________________________");

// if else
console.log("   IF Y ELSE:");

function validarEdad(edad) {
    if (edad<1) {
        console.log("Edad intelectual: " + edad);
    } else{
        if (edad>=18 && edad<=150) {
            console.log("Ya puedes salirte sin permiso a gastar");
        } else{
            if (edad<18) {
                console.log("Todavia tienes que pedir permiso");
            } else if(confirm('¿Aceptas estar del otro lado, en la muricion?')) {
                console.log("Saludas a la reina Isabel");
            } else {console.log("No escribas mamadas MJ");}
        }
    }
}

let edad = prompt("Introduce tu edad:"); //Manda un mensaje en una ventana

//console.log("Edad: " + edad);

if (edad && !isNaN(edad)) {
    if (confirm('¿Estas de acuerdo con seguir con esto?')) {
        validarEdad(edad);
    }else {
        console.log("Miedo, o que?");
    }
}else{
    alert("Debes introducir tu edad en numeros!");
    location.reload();
}


console.log("_______________________________________");

// Switch
console.log("   SWITCH:");

edad=Number(edad);

switch (edad) {
    case 12:
        console.log("Deberias andar en el colegio");
        break;
    case 63:
        console.log("Ya estas para pension");
    default:
        console.log("Pues... Buenos dias")
        break;
}

console.log("_______________________________________");

// While
console.log("   WHILE:");

let boletosDisponibles = 10

while (boletosDisponibles>0) {
    console.log("Boletos disponibles para el mundial de Qatar");
    boletosDisponibles--;
    console.log("Boletos restantes para el mundial de Qatar: " + boletosDisponibles);
    console.log("");
}

console.log("_______________________________________");

// Do While
console.log("   DO WHILE:");

do {
    console.log("Boletos disponibles para el mundial de Qatar");
    boletosDisponibles--;
    console.log("Boletos restantes para el mundial de Qatar: " + boletosDisponibles);
    console.log("");
} while (boletosDisponibles>0);

console.log("_______________________________________");

// Try Catch finally
console.log("   TRY CATCH FINALLY:");

try {//codigo suceptible a falla
    balidarEdad(edad);
} catch (error) {//en caso de falla
    console.info("Esa funcion no existe");
    console.error(error)
} finally {//despues de pasar lo anterior
    console.warn("Nadie te quiere :( ");
}