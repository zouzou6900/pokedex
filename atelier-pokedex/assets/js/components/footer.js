/* export default class Footer extends HTMLElement {
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
 */

export default class Footer extends HTMLElement {
  connectedCallback() {
    this.renderUsers();
    this.addEventListener('click', this.handleUserCardClick.bind(this));
  }

  async renderUsers() {
    const users = await fetch('http://localhost:3000/users').then((response) =>
      response.json().then((data) => {
        return data
          .map((user) => {
            return `<a href="#" class="userCard" data-username="${user.id}">
                      <img src="${user.img}" alt="${user.name}"/>
                      <h4>${user.name}</h4>
                      <span class="nbrPkm">Pokemon attrapés : 10</span>
                  </a>`;
          })
          .join('');
      }),
    );

    this.innerHTML = `
          <footer>
              <div class="users">
                  ${users}   
              </div>
          </footer>`;

    const activeUser = localStorage.getItem('activeUser');
    if (activeUser) {
      const activeUserCard = this.querySelector(
        `.userCard[data-username="${activeUser}"]`,
      );
      if (activeUserCard) {
        activeUserCard.classList.add('currentUser');
      }
    }
  }

  handleUserCardClick(event) {
    const userCard = event.target.closest('.userCard');
    if (userCard) {
      this.querySelectorAll('.userCard').forEach((card) =>
        card.classList.remove('currentUser'),
      );
      userCard.classList.add('currentUser');
      const activeUser = userCard.dataset.username;
      console.log(`Utilisateur actif dans footer : ${activeUser}`);
      localStorage.setItem('activeUser', activeUser);
      this.dispatchEvent(new CustomEvent('userSelected', { detail: activeUser }));
    }
  }
}