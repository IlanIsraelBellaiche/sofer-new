import { createStore, combineReducers } from 'redux';

import languageReducer from "./reducer/languageReducer";
import catalogReducer from "./reducer/catalogReducer";
import categoryActiveReducer from "./reducer/categoryActiveReducer";
import currencyReducer from './reducer/currencyReducer';

const reducer = combineReducers({
    languageReducer,
    catalogReducer,
    categoryActiveReducer,
    currencyReducer,
});

export const store = createStore(reducer);