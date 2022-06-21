import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import i18n from "i18next";

import styles from "./Languages.module.css";

import fr from "../../icons/france.png";
import he from "../../icons/israel.png";
import en from "../../icons/united-kingdom.png";

/**
 * Languages component.
 * Manage the languages of the website (Hebrew, French, English).
 * @component
 * @exports
 * 
 * @todo Fermer le div si on appuie sur "echap" ou en dehors du composant.
 */
const Languages = () => {
  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const { defaultLanguage } = useSelector((state) => ({
    ...state.languageReducer,
  }));

  const listLanguage = {
    fr: fr,
    he: he,
    en: en,
  };

  const change_language = (e) => {
    i18n.changeLanguage(e.target.alt);
    dispatch({
      type: "setLanguage",
      value: e.target.alt,
    });

    setToggle(false);
  };

  return (
    <div
      className={`${styles.languages} ${styles.dropdown}`}
      style={{
        right: defaultLanguage === "he" ? "5vw" : "",
        left: defaultLanguage !== "he" ? "5vw" : "",
      }}
    >
      <div>
        <img
          onClick={() => {
            setToggle(!toggle);
          }}
          src={listLanguage[defaultLanguage]}
          alt={defaultLanguage}
          className={styles.img}
        />
      </div>
      <div
        style={{ display: toggle ? "flex" : "none" }}
        className={`${styles.dropdownContent} ${
          defaultLanguage === "he"
            ? styles.dropdownContentRTL
            : styles.dropdownContentLTR
        }`}
      >
        {Object.keys(listLanguage).map((item) => {
          if (item === defaultLanguage) {
            return null;
          } else {
            return (
              <img
                key={item}
                src={listLanguage[item]}
                alt={item}
                className={styles.img}
                onClick={(e) => {
                  change_language(e);
                }}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Languages;