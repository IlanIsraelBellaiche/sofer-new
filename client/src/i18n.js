import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

import he from "./utils/i18next/HE/traductionsHE";
import fr from "./utils/i18next/FR/traductionFR";
import en from "./utils/i18next/EN/traductionEN";

const resources = {
    he,
    fr,
    en
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng: "he",

    keySeparator: false,

    interpolation: {
        escapeValue: false
    }
});

export default i18n;