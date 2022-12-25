let operacion = document.getElementById("screen");//Lo utilizo para mostrar las operaciones en la pantalla
let aCalcular = '';//Inicializa variable para hacer calculos

function escribe(index){
    let botonScreen =document.querySelector(`#${index}`);//Obtiene que presiona el usuario
    let botonResultado;//Ayuda a obtener la operacion a realizar

    if (index==="borrar") { //Este if valida las funciones de clear, igual y raiz cuadrada
        operacion.innerHTML = "";
        aCalcular='';
        botonResultado='';
        let raiz = document.querySelector("#raiz");
        raiz.innerHTML = "√("; //Para que vuelva a la normalidad la raiz con el clear
    } else if (index==="resultado") {
        operacion.innerHTML = eval(aCalcular);
        aCalcular = "(" + aCalcular + ")";
        botonResultado="";
    } else if (index==="raiz") {
        if (botonScreen.innerHTML === "√("){//Abre un parentesis con la raiz para calcular
            operacion.innerHTML += botonScreen.innerHTML;
            botonScreen.innerHTML = ")";
            botonResultado = "Math.sqrt("; 
        } else {//si el parentesis esta abierto se cierra el parentesis
            operacion.innerHTML += botonScreen.innerHTML;
            botonResultado = botonScreen.innerHTML;
            botonScreen.innerHTML = "√(";}
        }

    else{//El else valida los numeros y el resto de operaciones
        if (index==="potencia") {
            botonScreen.innerHTML = "²";
            botonResultado = "**2";
        } else {
            botonScreen.innerHTML;
            botonResultado = botonScreen.innerHTML;
        }
        operacion.innerHTML += botonScreen.innerHTML;
    }

    aCalcular += botonResultado;//Almacena la operacion a realizar en el momento
    console.log(aCalcular);
    console.log("----");
}