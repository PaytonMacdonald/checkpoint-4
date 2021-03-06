import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { api } from "./AxiosService.js"

class QuoteService {

    async getQuote() {
        let res = await api.get('quotes')
        ProxyState.quote = new Quote(res.data)
    }



}

export const quoteService = new QuoteService();
