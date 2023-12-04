export default class Pokedex extends HTMLElement {
  async connectedCallback() {
    const activeUser = Number(localStorage.getItem('activeUser'));

    const pokedexData = await fetch('http://localhost:3000/pokedex')
    .then((response) => response.json()
    .then((data) => {

      const filteredData = data.filter(pokemon => pokemon.ownerId === activeUser);

      return filteredData.map((pokemon) => {
            return `
                  <div class="pokemonCard" pkmId="${pokemon.id}">
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
    });

    document.querySelectorAll('.pokemonCard').forEach((card)=>{
      card.addEventListener('click',(event)=>{
        displayPokedexModal(event)
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

//Fonction à terminer et à réorganiser suivant le visuel voulu
async function displayPokedexModal(event){
  const pkmId = event.target.closest('.pokemonCard').getAttribute('pkmId');

  const response = await fetch(`http://localhost:3000/pokedex/${pkmId}`)
  const pkmData = await response.json();
  console.log('pkmData from pokedex.js :',pkmData);
  
  const body = document.querySelector('body');
  const modalContainer = document.createElement('div');

  const markup = `
    <div class="title">
      <div class="pokemonId">N° ${pkmData.pokedexId}</div>
      <div class="pokemonName">${pkmData.name}</div>
      <div class="pokedexBtn">
        ${pkmData.fav === true ? 
        `<img class="favoris active" alt="Bouton favoris" src="./public/img/favoris.png">` :
        `<img class="favoris" alt="Bouton favoris" src="./public/img/favoris-modified-gray.png">`
        }
        <img class="delete ${pkmData.fav === true ? "casper" : ""}" alt="Bouton delete" src="./public/img/delete.png">
      </div>
    </div>
    <img src="${pkmData.image}">
    <div>
        ${pkmData.type.map((t)=> {
          return `
            <div>
              <img src="${t.image}">
              <p>${t.name}</p>
            </div>
          `
        }).join('')}

        <div>
          <div>HP : ${pkmData.stats.HP}</div>
          <div>Attaque : ${pkmData.stats.attack}</div>
          <div>Défense : ${pkmData.stats.defense}</div>
          <div>Attaque spé : ${pkmData.stats.special_attack}</div>
          <div>Défense spé : ${pkmData.stats.special_defense}</div>
          <div>Vitesse : ${pkmData.stats.speed}</div>
        </div>
    </div>
  `;

  modalContainer.classList.add('pokedexModal');
  modalContainer.innerHTML = markup;
  body.appendChild(modalContainer);
  /* document.getElementById('btn-back').addEventListener('click', () => {
      modalContainer.remove();
  }); */

  //reste à mettre le bouton pour fermer et aussi l'espace pour les commentaires (pkmData.comment)
}
