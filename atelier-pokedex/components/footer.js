export default class Footer extends HTMLElement {
    async connectedCallback(){
        const users = await fetch("http://localhost:3000/users")
        .then((response) => response.json()
        .then((data) => {
            return data.map(user => {
                return `<div class="userCard">
                    <h4>${user.name}</h4>
                </div>`
            }).join("");
        }))
        
        this.innerHTML = `
        <footer>
            <div>img</div>
            <div class="users">
                ${users}
            </div>
        </footer>`
    }
}