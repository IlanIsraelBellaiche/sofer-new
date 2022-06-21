import Request from "./Request";

class RequestPostMessage extends Request {
    postMessage = async (contact) => {
        const req = await this.state.api.post('postMessage', contact);
        return req;
    }
}

export const requestPostMessage = new RequestPostMessage();