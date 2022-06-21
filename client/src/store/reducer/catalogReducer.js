import { setCatalog } from "../actions";

const initialState = {
    catalog: {}
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCatalog:
            return {
                ...state,
                catalog: action.value
            }
        default:
            return state;
    }
}

export default categoryReducer;