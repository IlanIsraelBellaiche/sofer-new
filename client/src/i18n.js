import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import He from "./utils/i18next/HE/traductionsHE";
import Fr from "./utils/i18next/FR/traductionFR";
import En from "./utils/i18next/EN/traductionEN";

const resources = {
    He,
    Fr,
    En
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng: "He",

    keySeparator: false,

    interpolation: {
        escapeValue: false
    }
});

export default i18n;