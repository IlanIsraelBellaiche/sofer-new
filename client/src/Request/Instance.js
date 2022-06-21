import axios from "axios";
import { urlServer } from "../Conf/Conf";

class Instance {
    constructor (props) {
        const url = (props === "api") ? "/api" : "";

        this.state = {
            instance: axios.create({
                baseURL: urlServer + url
            })
        }
    }

    get = (url, data = null) => {
        const params = (data) ? {params: {data:data}} : null;
        const instance = this.state.instance
        .get(url, params);
        return instance;
    }

    post = (url, data) => {
        const params = data;
        const instance = this.state.instance
        .post(url, params);
        return instance;
    }
}

export const api = new Instance("api");
export const controller = new Instance("controller");