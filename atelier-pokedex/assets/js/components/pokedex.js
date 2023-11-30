export default class Pokedex extends HTMLElement {
      async connectedCallback() {
        const pokedexData = await fetch('http://localhost:3000/pokedex').then((response) =>
          response.json().then((data) => {
            return data
              .map((pokemon) => {
                return `
                        <ul>
                          <li class="idPokemon">${pokemon.pokedexId}</li>
                          <li class="name">${pokemon.name}</li>
                          <li>F</li>
                          <li><botton>X</botton></li>
                        </ul>
                        
                        <div class="container-img">
                            <img src=${pokemon.image} style="height:64px;">
                        </div>
                        <p class="speed">${pokemon.stats.speed}</p>
                    `;
              })
              .join('');
          }),
        );
        this.innerHTML =  `
                          <div class="pokemonCard" >
                            ${pokedexData}
                          </div>
                        `;
    } 
}