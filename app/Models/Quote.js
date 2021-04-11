export default class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
        this.id = data.id

    }

    get Template() {
        return /*html*/`
            <h5 class="quote">${this.content}</h5>
            <span class="author"><b>${this.author}</b></span>
        `
    }
}