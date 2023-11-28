export default class Header extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name');
        this.innerHTML = `<h1>${name}</h1>`;
    }
}