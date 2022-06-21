import { api, controller } from "./Instance";

class Request {
    state = {
        api: api,
        controller: controller
    };
}

export default Request;
export const request = new Request();