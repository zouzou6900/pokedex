export default class WildList extends HTMLElement {
  connectedCallback() {
    const pkmList = JSON.parse(localStorage.getItem('wildpkm'));
    let length = 0;
    let WildList = '';

    for (const pkm of pkmList) {
      const bgColorClass = length % 2 ? 'darker-bg' : 'lighter-bg';
      WildList += `
  <tr class="${bgColorClass}">
    <td>${pkm.pokedexId}</td>
    <td><img src=${pkm.sprite} style="height:32px;">${pkm.name}</td>
    <td>${pkm.type.map((t) => t.name).join(', ')}</td>
  </tr>
`;
      length += 1;
    }
    this.innerHTML = `<table>
            <thead>
                <tr>
                    <th>Numéro</th>
                    <th>Nom</th>
                    <th>Types</th>
                </tr>
            </thead>
            <tbody>
                ${WildList}
            </tbody>
        </table>`;
  }
}
