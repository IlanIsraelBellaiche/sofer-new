import Request from "./Request";

class RequestCollection extends Request {
    getActive = async (collectionName) => {
        const req = await this.state.api.get('getCollection', collectionName);
        return req.data;
    }
}

export const requestCollection = new RequestCollection();