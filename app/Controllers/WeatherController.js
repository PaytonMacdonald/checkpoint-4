import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { loadToggle } from "../Utils/LocalStorage.js";



//Private
function _draw() {
    if (ProxyState.toggleC != true) {
        document.getElementById("weather").innerHTML = ProxyState.weather.TemplateF
    }
    else { document.getElementById("weather").innerHTML = ProxyState.weather.TemplateC }
}


//Public
export default class WeatherController {
    constructor() {
        ProxyState.on("weather", _draw);
        loadToggle()
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch {
            console.error(error)
        }
    }

    toggleC() {
        weatherService.toggleC()
        _draw()
    }
}