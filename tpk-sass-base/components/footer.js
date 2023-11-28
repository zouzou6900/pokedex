class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <div class="user">
            <span class="name">Amand</span>
            <span class="counter">Nombre de pokemons : </span>
            <span class="more">Lorem ipsum</span>

        </div>
        <div class="user">
            <span class="name">Steve</span>
            <span class="counter">Nombre de pokemons : </span>
            <span class="more">Lorem ipsum</span>
        </div>
        <div class="user">
        <span class="name">Amaury</span>
            <span class="counter">Nombre de pokemons : </span>
            <span class="more">Lorem ipsum</span>
        </div>
    </footer>
    `;
  }
}
customElements.define('my-footer', FooterComponent);