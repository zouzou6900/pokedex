
export default class WildList extends HTMLElement {
    connectedCallback(){
        const pkmList = JSON.parse(localStorage.getItem('wildpkm'));

        let WildList ="";

        for (const pkm of pkmList) {
            WildList += `<tr>
                <td>${pkm.pokedexId}</td>
                <td>${pkm.name}</td>
                <td>${pkm.type.map(t => t.name).join(", ")}</td>
            </tr>`
        }
        this.innerHTML = `<table>
            <thead>
                <tr>
                    <th>Numéro<th>
                    <th>Nom<th>
                    <th>Types<th>
                </tr>
            </thead>
            <tbody>
                ${WildList}
            </tbody>
        </table>`
    }
}