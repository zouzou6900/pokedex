
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

export function displayCaptureModal(event) {
    const pkmIndex = event.target.parentNode.getAttribute('index');
    const pkmData = JSON.parse(localStorage.getItem('wildList'))[pkmIndex];
    const body = document.querySelector('body');
  
    const layer = document.createElement('div');
    layer.classList.add('layer');
    layer.addEventListener('click', (event) => {
      if (!event.target.closest('.captureModal')) {
        layer.remove();
      }
    });
  
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('captureModal');
    const captureMarkUp = `<p>Un ${pkmData.name} sauvage apparait !</p>
      <div><img src="${pkmData.image}"</div>
      <p id="modal-msg">Voulez-vous tenter de le capturer ?</p>
      <div>
          <button id="btn-back" class="fa-solid"><i class="fa-solid fa-circle-arrow-left"></i></button>
          <button id="btn-capture"><img src="./public/img/pokeball.png" alt="Capturer Pokemon"></button>
      </div>`;
    modalContainer.innerHTML = captureMarkUp;
    body.appendChild(layer);
    layer.appendChild(modalContainer);
    
    document.getElementById('btn-back').addEventListener('click', (event) => {
      layer.remove();
    });
    document.getElementById('btn-capture').addEventListener('click', () => {
      capturePokemon(pkmData,pkmIndex);
    });
}

function capturePokemon(pkmData,pkmIndex){
    const row = document.querySelector(`[index="${pkmIndex}"]`);
    const modalMsg = document.getElementById('modal-msg');
    const userId = Number(localStorage.getItem('activeUser'));
    const pokemon = pkmData;
    const userData = getOneUser(userId);
    const isCaptured = calculateCaptureChance(pokemon,userData);

    if(isCaptured === false){
        row.remove();
        modalMsg.innerText = `${pokemon.name} prend la fuite`;
        modalMsg.style.backgroundColor = "red";
        userData.escape +=1;
        updateOneUser(userId, userData);
    }else{
        row.remove()
        modalMsg.innerText = `Vous avez capturé ${pokemon.name}`;
        modalMsg.style.backgroundColor = "green";
        pokemon.ownerId = Number(userId);
        userData.total +=1;
        userData.catch +=1;

        fetch('http://localhost:3000/pokedex',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pokemon)
        });

        updateOneUser(userId, userData);
    }
    
}

function calculateCaptureChance(pokemon,userData){
    const dice = randomNumber(20)
    const speed = pokemon.stats.speed
    const bonus = Math.floor(Math.log2(userData.catch / 10));
    let result = ''
    let capture =''

    if(userData.catch >= 10){
        result = dice - (speed/10) + bonus
    }else{
        result = dice - (speed/10)
    }

    if(result > 0){
        capture = true
    }else{
        capture = false
    }

    return capture
}

function getOneUser(id) {
    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    const user = usersData.find(u => u.id === id);
    return user;
}

function updateOneUser(id, updatedData) {
    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = usersData.map(user => (user.id === id ? { ...user, ...updatedData } : user));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
}

export function handleUserSelectedEvent(event) {
    const activeUser = event.detail;
  
    const userHeader = document.getElementById('activeUserDisplay');
    userHeader.innerHTML = `
      Salut ${activeUser}`;
  }
  
  document
    .querySelector('main-footer')
    .addEventListener('userSelected', handleUserSelectedEvent);