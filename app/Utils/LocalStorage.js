import { ProxyState } from "../AppState.js";


export function saveToggle() {
  localStorage.setItem('toggle', JSON.stringify(ProxyState.toggleC))
}

export function loadToggle() {
  let data = JSON.parse(localStorage.getItem('toggle'))
  ProxyState.toggleC = data
}






