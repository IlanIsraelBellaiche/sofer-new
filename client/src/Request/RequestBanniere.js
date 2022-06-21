import Request from "./Request";

class RequestBanniere extends Request {
    getActive = () => {
        const req = this.state.api.get('getBanniere');
        return req;
    }
}

export const requestBanniere = new RequestBanniere();