import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { api } from "./AxiosService.js"

class ImageService {

    async getImage() {
        let res = await api.get('images')
        ProxyState.image = new Image(res.data)
    }



}

export const imageService = new ImageService();
