export default class Image {
    constructor(data) {
        this.image = data.url
        this.id = data.id

        //this.Far = //NOTE this is where the math goes
    }

    get Template() {
        return /*html*/`
        <img src="${this.image}" width="250">
        `
    }
}



// 