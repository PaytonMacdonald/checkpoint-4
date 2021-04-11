import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { saveToggle } from "../Utils/LocalStorage.js";
import { api } from "./AxiosService.js"

class WeatherService {

    async getWeather() {
        let res = await api.get('weather')
        ProxyState.weather = new Weather(res.data)
    }

    toggleC() {
        if (ProxyState.toggleC == false) {
            ProxyState.toggleC = true
        }
        else { ProxyState.toggleC = false }
        saveToggle()
    }
}
export const weatherService = new WeatherService();
