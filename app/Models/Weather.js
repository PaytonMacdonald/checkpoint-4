import { ProxyState } from "../AppState.js";

export default class Weather {
    constructor(data) {
        this.f = Math.floor(((data.main.temp - 273.15) * 1.8) + 32)
        this.c = Math.floor(data.main.temp - 273.15)


        //this.Far = //NOTE this is where the math goes
    }

    get TemplateF() {
        return /*html*/`
            <h2>F ${this.f}°</h2>
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" ${ProxyState.toggleC ? 'checked' : ''} onclick="app.weatherController.toggleC()">
                <label class="custom-control-label" for="customSwitch1">C°</label>
            </div>
    `}
    get TemplateC() {
        return /*html*/`
            <h2>C ${this.c}°</h2>
            <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="customSwitch1" ${ProxyState.toggleC ? 'checked' : ''} onclick="app.weatherController.toggleC()">
                <label class="custom-control-label" for="customSwitch1">C°</label>
            </div>
    `}

}

