export default class Header extends HTMLElement {
<<<<<<< HEAD
  connectedCallback() {
    const current = this.getAttribute('current');
    this.innerHTML = `<header>
<<<<<<< HEAD
                        <div class="logo"><img src="./public/img/logo-banner.png" alt="logo pokemon"></div>
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
                            <p class="catch">50</p>
                            <p class="notCatch">20</p>
                        </div>
                      </header>`;
=======
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
          <p class="catch">50</p>
          <p class="notCatch">20</p>
      </div>
      </header>`;
>>>>>>> main
=======
    connectedCallback() {
      const current = this.getAttribute('current');
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
            <p class="catch">50</p>
            <p class="notCatch">20</p>
        </div>
        </header>`;
    }
>>>>>>> amand
  }
