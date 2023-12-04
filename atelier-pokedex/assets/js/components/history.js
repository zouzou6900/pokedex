import { getHistory } from "../history-functions.js";

export default class Header extends HTMLElement {
  connectedCallback() {
    const history = getHistory();
    this.innerHTML = `<table class="history-table">
      <thead><tr>
      <th>Date</th>
      <th>Heure</th>
      <th>Dresseur</th>
      <th>Info</th>
      </tr></thead>
      <tbody>
      ${history.map((h)=>{
        return `
          <tr>
            <td>${h.date}</td>
            <td>${h.hour}</td>
            <td>${h.name}</td>
            <td>${h.message}</td>
          </tr>
        `
      })}
      </tbody>
      
      </table>`;
  }
}
