import { setCurrency } from "../actions";
import { setCurrencyName } from "../actions";

const initialState = {
    defaultCurrency: "₪",
    currencyName: "ILS",
}

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case setCurrency:
            return {
                ...state,
                defaultCurrency: action.value,
            }
        case setCurrencyName: 
            return {
                ...state,
                currencyName: action.value,
            }
        default:
            return state;
    }
}

export default currencyReducer;