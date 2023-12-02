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
                "pokedexId": pokemonData.pokedexId,
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
    const body = document.querySelector('body');
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('captureModal');
    modalContainer.setAttribute('index',`${pkmIndex}`);
    const captureMarkUp = `<p>Un ${pkmData.name} sauvage apparait !</p>
    <div><img src="${pkmData.image}"</div>
    <p id="modal-msg">Voulez-vous tenter de le capturer ?</p>
    <div>
        <button id="btn-back" class="fa-solid"><i class="fa-solid fa-circle-arrow-left"></i></button>
        <button id="btn-capture"><img src="./public/img/pokeball.png" alt="Capturer Pokemon"></button>
    </div>`

    modalContainer.innerHTML= captureMarkUp;
    body.appendChild(modalContainer);

    document.getElementById('btn-back').addEventListener('click',(event)=>{
        event.target.closest('.captureModal').remove();
    })

    document.getElementById('btn-capture').addEventListener('click',()=>{
        capturePokemon(pkmIndex, pkmData);
    })
}

function capturePokemon(event,pkmIndex,pkmData){
    const userId = "";
    const pokemon = pkmData;
    getOneUser(3)

}

function getOneUser(id){
    const user = fetch(`http://localhost:3000/users/${id}`)
    .then((response)=> response.json())
    .then((data) =>{
        console.log(data);
    })
}

export function handleUserSelectedEvent(event) {
    const activeUser = event.detail;
    console.log('Utilisateur actif dans main.js :', activeUser);
  
    const userHeader = document.getElementById('activeUserDisplay');
    userHeader.innerHTML = `
      Salut ${activeUser}`;
  }
  
  document
    .querySelector('main-footer')
    .addEventListener('userSelected', handleUserSelectedEvent);