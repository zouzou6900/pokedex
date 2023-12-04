<<<<<<< Updated upstream
/* export default class Footer extends HTMLElement {
  async connectedCallback() {
    try {
      const response = await fetch('http://localhost:3000/users');
      const usersData = await response.json();
=======
export default class Footer extends HTMLElement {
  connectedCallback() {
    this.renderUsers();
    this.addEventListener('click', this.handleUserCardClick.bind(this));
  }
>>>>>>> Stashed changes

  async renderUsers() {
    
    const isUsersExist = JSON.parse(localStorage.getItem('users'));
    if(!isUsersExist){
      const mockUsers = [
        {
          "name": "Amaury",
          "catch": 0,
          "escape": 0,
          "total": 0,
          "id": 1,
          "img": "./public/img/bulbizarre.png"
        },
        {
          "name": "Steve",
          "catch": 0,
          "escape": 0,
          "total": 0,
          "id": 2,
          "img": "./public/img/salameche.png"
        },
        {
          "name": "Amand",
          "catch": 0,
          "escape": 0,
          "total": 0,
          "id": 3,
          "img": "./public/img/carapuce.png"
        }
      ]
      localStorage.setItem('users', JSON.stringify(mockUsers));
    }
    const usersData = JSON.parse(localStorage.getItem('users'));
    const users = usersData.map((user) => {
      return `
      <a href="#" class="userCard" data-username="${user.id}">
        <img src="${user.img}" alt="${user.name}"/>
        <h4>${user.name}</h4>
        <span class="nbrPkm">Pokemon possédés : ${user.total}</span>
      </a>`;
    }).join('');

    this.innerHTML = `
    <footer>
        <div class="users">
            ${users}   
        </div>
    </footer>`;

    const checkActiveUser = localStorage.getItem('activeUser');
    if(!checkActiveUser) localStorage.setItem('activeUser',1);
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
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

  handleUserCardClick(event) {
    const userCard = event.target.closest('.userCard');
    if (userCard) {
      this.querySelectorAll('.userCard').forEach((card) =>
        card.classList.remove('currentUser'),
      );
      userCard.classList.add('currentUser');
      const activeUser = userCard.dataset.username;
<<<<<<< Updated upstream
      console.log(`Utilisateur actif dans footer : ${activeUser}`);
      localStorage.setItem('activeUser', activeUser);
      this.dispatchEvent(new CustomEvent('userSelected', { detail: activeUser }));
    }
  }
}
=======
      localStorage.setItem('activeUser', activeUser);
      this.dispatchEvent(new CustomEvent('userSelected', { detail: activeUser }));

      location.reload();
    }
  }
}
>>>>>>> Stashed changes
