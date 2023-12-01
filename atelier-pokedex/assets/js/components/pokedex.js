export default class Pokedex extends HTMLElement {
      async connectedCallback() {
        const pokedexData = await fetch('http://localhost:3000/pokedex').then((response) =>
          response.json().then((data) => {
            return data
              .map((pokemon) => {
                return `
                      <div class="pokemonCard">
                        <div class="title">
                          <p class="id-pokemon">${pokemon.pokedexId}</p>
                          <p class="name-pokemon">${pokemon.name}</p>
                          <img class="favoris" src="./public/img/favoris.png" >
                          <img class="delete" src="./public/img/delete.png">
                          
                        </div>
                        <img src=${pokemon.image} class="img-pokemon">
                        <p class="speed">${pokemon.stats.speed}</p>
                      </div>
                    `;
              })
              .join('');
          }),
        );
        this.innerHTML =  `
                          <div class="pokedex">  
                              ${pokedexData}   
                          </div>
                        `;
    } 
}