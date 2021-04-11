import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";



//Private
function _draw() {
    window.onload = displayClock();
    function displayClock() {
        let clock = new Date().toLocaleTimeString();
        document.getElementById("clock").innerHTML = `<h1 class="">${clock}</h1><span>how's it going today?</span>`
        setTimeout(displayClock, 1000);
    }
}


//Public
export default class ClockController {
    constructor() {
        _draw()
    }
}