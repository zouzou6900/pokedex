export default class Header extends HTMLElement {
    connectedCallback() {
      const current = this.getAttribute("current");
      this.innerHTML = `<header>
      <div class="logo"><img src="public/img/logo-banner.png" alt="logo pokemon"></div>
      <nav>
        <ul>
            <li><a style="color: ${
                current === "world" ? "green" : "red"
            }" href="./">World</a></li>
            <li><a style="color: ${
                current === "pokedex" ? "green" : "red"
            }" href="./pokedex.html">Pokedex</a></li>
            <li><a style="color: ${
                current === "history" ? "green" : "red"
            }" href="./history.html">Historique</a></li>
        </ul>
      </nav>
      <div class="counter">
          <p class="catch">50</p>
          <p class="notCatch">20</p>
      </div>
      </header>`;
    }
}