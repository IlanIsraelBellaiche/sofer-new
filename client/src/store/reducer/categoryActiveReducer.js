import { setCategory } from "../actions";

const initialState = {
    category: {}
}

const categoryActiveReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCategory:
            return {
                ...state,
                category: action.value
            }
        default:
            return state;
    }
}

export default categoryActiveReducer;