export default class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<table class="history-table">
      <thead><tr>
      <th>Date</th>
      <th>Heure</th>
      <th>Dresseur</th>
      <th>Info</th>
      </tr></thead>
      <tbody>
      <tr>
      <td class="date">29/11/2023</td>
      <td class="time">14h59</td>
      <td>Amand</td>
      <td>Lorem ipsume truc bidule machin</td>
      </tr>
      <tr>
      <td class="date">29/11/2023</td>
      <td class="time">14h59</td>
      <td>Amand</td>
      <td>Lorem ipsume truc bidule machin</td>
      </tr>
      <tr>
      <td class="date">29/11/2023</td>
      <td class="time">14h59</td>
      <td>Amand</td>
      <td>Lorem ipsume truc bidule machin</td>
      </tr>
      <tr>
      <td class="date">29/11/2023</td>
      <td class="time">14h59</td>
      <td>Amand</td>
      <td>Lorem ipsume truc bidule machin</td>
      </tr>
      </tbody>
      
      </table>`;
  }
}
