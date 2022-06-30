import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import i18n from "i18next";

import styles from "./Languages.module.css";

import Fr from "../../icons/france.png";
import He from "../../icons/israel.png";
import En from "../../icons/united-kingdom.png";

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
    Fr: Fr,
    He: He,
    En: En,
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
        right: defaultLanguage === "He" ? "5vw" : "",
        left: defaultLanguage !== "He" ? "5vw" : "",
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
          defaultLanguage === "He"
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