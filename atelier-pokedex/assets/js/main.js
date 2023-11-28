export function randomNumber(max){
    return Math.floor(Math.random() * (max + 1));
}

export async function generateWildList() {
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
        localStorage.setItem("wildpkm", JSON.stringify(clearList));
        displayWildList()
    })
}

generateWildList()

function displayWildList() {
    const pkmList = JSON.parse(localStorage.getItem('wildpkm'));
    const pkmDisplay = document.querySelector('.wild-list');

    let WildList ="";

    for (const pkm of pkmList) {
        WildList += `<tr>
            <td>${pkm.pokedexId}</td>
            <td>${pkm.name}</td>
            <td>${pkm.type.map(t => t.name).join(", ")}</td>
        </tr>`
    }
    pkmDisplay.innerHTML = `<table>
        <thead>
            <tr>
                <th>Numéro</th>
                <th>Nom</th>
                <th>Types</th>
            </tr>
        </thead>
        <tbody>
            ${WildList}
        </tbody>
    </table>`
}

document.getElementById('reloadWildList').addEventListener('click', function(){
    generateWildList()
})