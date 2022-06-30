import { setLanguage } from "../actions";

const initialState = {
    defaultLanguage: "He"
}

const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case setLanguage:
            return {
                ...state,
                defaultLanguage: action.value
            }
        default:
            return state;
    }
}

export default languageReducer;