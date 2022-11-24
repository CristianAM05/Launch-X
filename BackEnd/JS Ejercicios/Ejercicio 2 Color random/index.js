const parrafoInicial = document.getElementById("parrafoinicial");

parrafoInicial.onclick = function(){
    cambiaColor();
} //Evento

function cambiaColor(){
    const colores = ["yellow","blue","red","gray","white","black"];
    console.log(Math.floor(Math.random()*colores.length));//numero random
    parrafoInicial.style.color = colores[Math.floor(Math.random()*colores.length)];//color random
}

/*
TIPOS DE VARIABLE
var -> puede modificarse y es global
let -> puede modificarse pero solo actua en su scope o ciclo
const -> no se puede modificar y es global

*/
