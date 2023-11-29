//import WildList from "./components/wild-list.js";
export function randomNumber(max){
    return Math.floor(Math.random() * (max + 1));
}

/* export function generateWildList() {
    //const test = JSON.parse(localStorage.getItem('wildList'));
    const test = JSON.parse(localStorage.getItem('wildList'));
    const test2 = JSON.parse(localStorage.getItem('wildTemp'));

    if(!test && !test2){
        localStorage.setItem("wildList", JSON.stringify(generateData()));
        generateWildList()
    }

    if(test && !test2){
        localStorage.setItem("wildTemp", JSON.stringify(generateData()));
    }

    if(test && test2){
        localStorage.setItem("wildList", JSON.stringify(test2));
        localStorage.setItem("wildTemp", JSON.stringify(generateData()));
    }
}

function generateData() {
    const clearList = [];
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < 50; i++) {
            const rand = randomNumber(898);
            const pokemonData = data[rand];
            const pokemon = {
                "pokedexId": pokemonData.pokedexId,
                "name" : pokemonData.name,
                "type": pokemonData.apiTypes,
                "stats" : pokemonData.stats,
                "image" : pokemonData.image,
                "sprite" : pokemonData.sprite,
            }
            clearList.push(pokemon); 
        }
    }) 
    return clearList;
} */

export function generateWildList() {
    const test = JSON.parse(localStorage.getItem('wildList'));
    const test2 = JSON.parse(localStorage.getItem('wildTemp'));

   /*  if(test && test2){
        localStorage.setItem("wildList", JSON.stringify(test2));
    } */
    
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then((response) => response.json())
    .then((data) => {
        const clearList = [];
        for (let i = 0; i < 50; i++) {
            const rand = randomNumber(898);
            const pokemonData = data[rand];
            const pokemon = {
                "pokedexId": pokemonData.pokedexId,
                "name" : pokemonData.name,
                "type": pokemonData.apiTypes,
                "stats" : pokemonData.stats,
                "image" : pokemonData.image,
                "sprite" : pokemonData.sprite,
            }
            clearList.push(pokemon); 
        }
        if(!test){
            localStorage.setItem("wildList", JSON.stringify(clearList));
            generateWildList()
        }

        if(test){
            localStorage.setItem("wildTemp", JSON.stringify(clearList));
        }

        /* if(test && test2){
            localStorage.setItem("wildTemp", JSON.stringify(clearList));
        } */
    })
}

export function swapStorage(){
    const test2 = JSON.parse(localStorage.getItem('wildTemp'));
    localStorage.setItem("wildList", JSON.stringify(test2));
    generateWildList()
}
