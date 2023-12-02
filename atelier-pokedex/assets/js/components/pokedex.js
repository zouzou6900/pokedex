export default class Pokedex extends HTMLElement {
  async connectedCallback() {
    const pokedexData = await fetch('http://localhost:3000/pokedex')
    .then((response) => response.json()
    .then((data) => { 
      return data.map((pokemon) => {
            return `
                  <div class="pokemonCard">
                    <div class="title">
                      <div class="id-pokemon">N°${pokemon.pokedexId}</div>
                      <div class="name-pokemon">${pokemon.name}</div>
                      <div class="btn-pokedex">
                        <img class="favoris" alt="Image du bouton favoris" src="./public/img/favoris-modified-gray.png">
                        <img class="delete" src="./public/img/delete.png">
                      </div>
                    </div>
                    <img src=${pokemon.image} class="img-pokemon">
                    <p class="speed"><img class="speed-img" src="./public/img/vitesse.png"> ${pokemon.stats.speed}</p>
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
                    const btnFav = document.querySelectorAll('.favoris');
                    btnFav.forEach(btn =>{
                      btn.addEventListener('click', (event)=>{
                        changementImg(event);
                      })
                    })
} 
}

function changementImg(event){
event.target.classList.toggle('active')
if (event.target.classList.contains('active')) {
event.target.src="./public/img/favoris.png"
event.target.nextElementSibling.classList.add('casper')
}else{
event.target.src="./public/img/favoris-modified-gray.png"
event.target.nextElementSibling.classList.remove('casper')
}
}