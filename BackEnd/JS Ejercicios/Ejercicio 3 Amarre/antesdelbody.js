window.onclick = function() {
    //Se crean elementos segun el tag que se quiera
    let titulos = document.createElement("h1");
    const texto = document.createTextNode("Hiciste un Clickaso");

    titulos.appendChild(texto);//Anida el elemento que se crea con el texto (node)
    document.body.appendChild(titulos);//Agrega el elemento al body cuando se cumpla la condicion del window

};