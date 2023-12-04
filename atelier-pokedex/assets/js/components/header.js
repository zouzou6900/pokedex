import { getOneUser } from "../main.js";
export default class Header extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute('current');
<<<<<<< Updated upstream
=======
    const activeUser = localStorage.getItem('activeUser');
    const pokemon = getOneUser(Number(activeUser));
>>>>>>> Stashed changes
    this.innerHTML = `<header>
        <a href="./" class="logo"><img src="public/img/logo-banner.png" alt="logo pokemon"></a>
        <nav>
          <ul>
              <li><a style="color: ${
                current === 'world' ? '#ffcb08' : 'white'
              }" href="./">World</a></li>
              <li><a style="color: ${
                current === 'pokedex' ? '#ffcb08' : 'white'
              }" href="./pokedex.html">Pokedex</a></li>
              <li><a style="color: ${
                current === 'history' ? '#ffcb08' : 'white'
              }" href="./history.html">Historique</a></li>
          </ul>
        </nav>
        <div class="counter">
            <div id="activeUserDisplay"></div>
<<<<<<< Updated upstream
            <p class="catch">50</p>
            <p class="notCatch">20</p>
=======
            <p class="catch">${pokemon.catch}</p>
            <p class="notCatch">${pokemon.escape}</p>
>>>>>>> Stashed changes
        </div>
        
        </header>`;
  }
}
