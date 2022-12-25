let operacion = document.getElementById("screen");
let aCalcular = '';

function escribe(index){
    let botonScreen =document.querySelector(`#${index}`);
    let botonResultado;

    if (index==="borrar") {
        operacion.innerHTML = "";
        aCalcular='';
        botonResultado='';
    } else if (index==="resultado") {
        operacion.innerHTML = eval(aCalcular);
        aCalcular = "(" + aCalcular + ")";
        botonResultado="";
    } else if (index==="raiz") {
        if (botonScreen.innerHTML === "√("){
            operacion.innerHTML += botonScreen.innerHTML;
            botonScreen.innerHTML = ")";
            botonResultado = "Math.sqrt("; 
        } else {
            operacion.innerHTML += botonScreen.innerHTML;
            botonResultado = botonScreen.innerHTML;
            botonScreen.innerHTML = "√(";}
        }

    else{
        if (index==="potencia") {
            botonScreen.innerHTML = "²";
            botonResultado = "**2";
        } else {
            botonScreen.innerHTML;
            botonResultado = botonScreen.innerHTML;
        }
        operacion.innerHTML += botonScreen.innerHTML;
    }

    aCalcular += botonResultado;
    console.log(aCalcular);
    console.log("----");
}