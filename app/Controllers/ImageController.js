import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";



//Private
function _draw() {

    document.body.style.background = `url(${ProxyState.image.image})`
    document.body.style.backgroundSize = `cover`

}


//Public
export default class ImageController {
    constructor() {
        ProxyState.on("image", _draw);
        this.getImage()
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch {
            console.error(error)
        }
    }
}