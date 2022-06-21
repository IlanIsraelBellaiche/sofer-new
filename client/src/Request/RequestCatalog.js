import Request from "./Request";

class RequestCatalog extends Request {
    getActive = () => {
        console.log("REQUEST CATALOG")
        const req = this.state.api.get('getCatalog');
        return req;
    }
}

export const requestCatalog = new RequestCatalog();