
export function randomNumber(max){
    return Math.floor(Math.random() * (max + 1));
}

export function generateWildList() {
    const isWildListStored = JSON.parse(localStorage.getItem('wildList'));
    
    fetch("https://pokebuildapi.fr/api/v1/pokemon")
    .then((response) => response.json())
    .then((data) => {
        const clearList = [];
        for (let i = 0; i < 50; i++) {
            const rand = randomNumber(898);
            const pokemonData = data[rand];
            const pokemon = {
                "pokedexId": pokemonData.id,
                "name" : pokemonData.name,
                "type": pokemonData.apiTypes,
                "stats" : pokemonData.stats,
                "image" : pokemonData.image,
                "sprite" : pokemonData.sprite,
            }
            clearList.push(pokemon); 
        }
        if(!isWildListStored){
            localStorage.setItem("wildList", JSON.stringify(clearList));
            generateWildList()
        }

        if(isWildListStored){
            localStorage.setItem("wildTemp", JSON.stringify(clearList));
        }
    })
}

export function swapStorage(){
    const test2 = JSON.parse(localStorage.getItem('wildTemp'));
    localStorage.setItem("wildList", JSON.stringify(test2));
    generateWildList()
}

export function displayCaptureModal(event){
    const pkmIndex = event.target.parentNode.getAttribute('index');
    const pkmData = JSON.parse(localStorage.getItem('wildList'))[pkmIndex];
    
    console.log(pkmData);
}