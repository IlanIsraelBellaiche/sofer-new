import Request from "./Request";

class RequestCategory extends Request {
    getActive = (categoryId) => {
        const req = this.state.api.get('getCategory', categoryId);
        return req;
    }
}

export const requestCategory = new RequestCategory();