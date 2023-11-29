import { generateWildList } from "../main.js";
import { swapStorage } from "../main.js";
export default class WildList extends HTMLElement {
    connectedCallback() {

      this.innerHTML = `<button class ="refreshList" type="button" id="reloadWildList"><img class= "refresh-img" src="./public/img/refresh.png"></button>
      <table>
              <thead>
                  <tr>
                      <th>Numéro</th>
                      <th>Nom</th>
                      <th>Types</th>
                  </tr>
              </thead>
              <tbody class="wildListBody">

              </tbody>
          </table>`;
          document.getElementById('reloadWildList').addEventListener('click', this.displayWildList
        )

        this.displayWildList()
    }

    displayWildList(){
        const listExist = JSON.parse(localStorage.getItem('wildList'));
        if(!listExist) return generateWildList()
        if(listExist) swapStorage()
           const pkmList = JSON.parse(localStorage.getItem('wildList'));
           
           const e = document.querySelector('.wildListBody');
           let length = 0;
           let WildList = '';
        
           for (const pkm of pkmList) {
               const bgColorClass = length % 2 ? 'darker-bg' : 'lighter-bg';
               WildList += `<tr class="${bgColorClass}">
                       <td>${pkm.pokedexId}</td>
                       <td><img src=${pkm.sprite} style="height:32px;">${pkm.name}</td>
                       <td>${pkm.type.map((t) => t.name).join(', ')}</td>
                   </tr>`;
               length += 1;
           }
    
           e.innerHTML = WildList;
    }
}