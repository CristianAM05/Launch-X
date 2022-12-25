const fetchPokemon = async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let info = await fetch(url).then((res) => { //Busca el link y devuelve si lo encuentra o no
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();//Basicamente la informacion de la pagina
        }
    })
    
    if (info) {
        console.log(info);
        let pokeImgUrl = info.sprites.front_shiny;
        let pokeInfo = info.abilities;
        pokeImage(pokeImgUrl);
        abilities(pokeInfo);
        console.log(pokeImgUrl);
    }
}


const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


const abilities = (ability) => {
    const pokeAbilities = document.getElementById("abilities");
    const abilitiesName = ability.map((item) =>item.ability.name);
    let numAbilities=0;
    let name=abilitiesName[numAbilities];
    for (numAbilities=1 ; numAbilities<(abilitiesName.length);numAbilities++){
        name = name + "<br>" + abilitiesName[numAbilities];
    }
    pokeAbilities.innerHTML = "<b>Habilidades:</b>" + name
}

