export default class Footer extends HTMLElement {
  async connectedCallback() {
    const users = await fetch('http://localhost:3000/users').then((response) =>
      response.json().then((data) => {
        return data
          .map((user) => {
            return `<div class="userCard">
                    <img src="${user.img}" alt="${user.name}"/>
                    <h4>${user.name}</h4>
                    <span class="nbrPkm">Pokemon attrapés : 10</span>
                </div>`;
          })
          .join('');
      }),
    );

    this.innerHTML = `
        <footer>
            <div><img src="./public/img/pikachu.png" alt="Pikachu" /></div>
            <div class="users">
                ${users}
                
            </div>
        </footer>`;
  }
}
