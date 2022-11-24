function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';//Absoluto para que pase por cualquier lado
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';//obtener alto de pantalla y generar random
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';//elm.offset para que no se salga el boton
}

let optSi = document.getElementById("opt_si");
let optNo = document.getElementById("opt_no");
let divModoSexo = document.getElementsByClassName("modo_pro")[0];

optNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });//cuando pase algo hace x cosa

optSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que SÍ.😎 \n Casemonos ya y tengamos hijos.\n ❤️ TE AMO!!!! ❤️');

    divModoSexo.style.display = 'block';//Reaparece la pantalla
    const cancion = new Audio('img\\modo_hot.mp3');
    cancion.play();
});