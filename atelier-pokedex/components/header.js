class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
    <div class="logo"><img src="public/img/logo-banner.png" alt="logo pokemon"></div>
    <nav id="menu">
        <ul>
            <li><a href="index.html">Monde</a></li>
            <li><a href="pockedex.html">Pockedex</a></li>
            <li><a href="historique.html">Historique</a></li>
        </ul>
    </nav>
    <div class="counter">
        <p class="catch">50</p>
        <p class="notCatch">20</p>
    </div>
    </header>`;
  }
}
customElements.define('my-header', HeaderComponent);

