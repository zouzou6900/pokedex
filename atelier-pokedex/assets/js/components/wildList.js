export default class WildList extends HTMLElement {
  connectedCallback() {
    const pkmList = JSON.parse(localStorage.getItem('wildpkm'));
    let length = 0;
    let WildList = '';

    for (const pkm of pkmList) {
      if (length % 2) {
        WildList += `<tr class="darker-bg">
                            <td>${pkm.pokedexId}</td>
                            <td><img src=${pkm.sprite} style="height:32px;">${
          pkm.name
        }</td>
                            <td>${pkm.type.map((t) => t.name).join(', ')}</td>
                        </tr>`;
      } else {
        WildList += `<tr class="lighter-bg">
                <td>${pkm.pokedexId}</td>
                <td><img src=${pkm.sprite} style="height:32px;">${pkm.name}</td>
                <td>${pkm.type.map((t) => t.name).join(', ')}</td>
            </tr>`;
      }
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
