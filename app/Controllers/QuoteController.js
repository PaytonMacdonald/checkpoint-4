import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";



//Private
function _draw() {
    document.getElementById("quote").innerHTML = ProxyState.quote.Template
}


//Public
export default class QuoteController {
    constructor() {
        ProxyState.on("quote", _draw);
        this.getQuote()
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch {
            console.error(error)
        }
    }
}