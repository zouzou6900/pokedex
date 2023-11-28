export default class Pokedex extends HTMLElement {
    connectedCallback() {
        const test={
                  "id": 1,
                  "pokedexId": 1,
                  "name": "Bulbizarre",
                  "type": [
                    {
                      "name": "Plante",
                      "image": "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png"
                    },
                    {
                      "name": "Poison",
                      "image": "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png"
                    }
                  ],
                  "stats": {
                    "hp": 45,
                    "attack": 49,
                    "defense": 49,
                    "special_attack": 65,
                    "special_defense": 65,
                    "speed": 45
                  },
                  "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
                  "sprite": "",
                  "ownerId": 3
        }
        this.innerHTML =  `
                        <div class="card">
                            <ul>
                                <li class="idPokemon">${test.pokedexId}</li>
                                <li class="name">${test.name}</li>
                                <li>F</li>
                                <li><botton>X</botton></li>
                            </ul>
                            <hr>
                            <div class="container-img">
                                <img src=${test.image} style="height:64px;">
                            </div>
                            <p class="speed">${test.stats.speed}</p>
                        </div>
                        `;
    } 
}



        
    
