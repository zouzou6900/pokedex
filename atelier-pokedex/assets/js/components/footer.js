export default class Footer extends HTMLElement {
  async connectedCallback() {
    try {
      const response = await fetch('http://localhost:3000/users');
      const usersData = await response.json();

      function updateUserArray(index) {
        const activeUserArray = [];
        if (!activeUserArray.includes(usersData[index])) {
          activeUserArray.push(usersData[index]);
        }
        console.log('Dresseur sélectionné :', activeUserArray);
      }

      const users = usersData
        .map((user, index) => {
          return `<a href="#" class="userCard" id="userCard${index}">
                    <img src="${user.img}" alt="${user.name}"/>
                    <h4>${user.name}</h4>
                    <span class="nbrPkm">Pokemons attrapés : 10</span>
                </a>`;
        })
        .join('');

      this.innerHTML = `
        <footer>
          <div><img src="./public/img/pikachu.png" alt="Pikachu" /></div>
          <div class="users">
            ${users}   
          </div>
          
        </footer>`;

      usersData.forEach((user, index) => {
        const userCard = this.querySelector(`#userCard${index}`);
        if (userCard) {
          userCard.addEventListener('click', () => {
            updateUserArray(index);
          });
        }
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
  }
}
