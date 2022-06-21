import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Catalog.module.css";

/**
 * Catalog component.
 * Includes the full catalog.
 * @component
 * @exports
 * @param {object} catalog 
 */
const Catalog = ({ catalog }) => {
  const [t, i18n] = useTranslation("Catalog");

  console.log(catalog);

  return (
    <div>
      <h1 className={styles.title}>{t("catalog")}</h1>
    </div>
  );
};

export default Catalog;
