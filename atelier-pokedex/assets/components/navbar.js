export default class Navbar extends HTMLElement {
    connectedCallback(){
        const current = this.getAttribute("current");
        this.innerHTML = `   
            <nav>
                <ul>
                    <li><a style="color: ${
                        current === "world" ? "green" : "red"
                    }" href="./">World</a></li>
                    <li><a style="color: ${
                        current === "pokedex" ? "green" : "red"
                    }" href="./pokedex.html">Pokedex</a></li>
                    <li><a style="color: ${
                        current === "historique" ? "green" : "red"
                    }" href="./historique.html">Historique</a></li>
                </ul>
            </nav>  
        `;
    }
}