export default class Pokedex extends HTMLElement {
      async connectedCallback() {
        const pokedexData = await fetch('http://localhost:3000/pokedex').then((response) =>
          response.json().then((data) => {
            return data
              .map((pokemon) => {
                return `
                        <div class="title">
                          <p>${pokemon.pokedexId}</p>
                          <p>${pokemon.name}</p>
                          <img></img>
                          <img></img>
                          <img src=${pokemon.image} style="height:64px;">
                        </div>
                        <p class="speed">${pokemon.stats.speed}</p>
                    `;
              })
              .join('');
          }),
        );
        this.innerHTML =  `
                          <div class="pokedex">
                            <div class="pokemonCard" style="display: flex;">
                              ${pokedexData}
                            </div>
                          </div>
                        `;
    } 
}