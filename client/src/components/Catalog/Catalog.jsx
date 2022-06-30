import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import styles from "./Catalog.module.css";

import CatalogItem from "./CatalogItem/CatalogItem";
import { requestCollection } from "../../Request/RequestCollection";

/**
 * Catalog component.
 * Display a full collection.
 * @component
 * @exports
 * @param {string} catalog The name of the collection to display.
 */
const Catalog = ({ catalog }) => {
  const [t, i18n] = useTranslation("Catalog");

  const [collection, setCollection] = useState({});

  // Get a full collection.
  useEffect(() => {
    requestCollection.getActive(catalog).then((res) => {
      setCollection(res);
    });
  }, [catalog]);

  return (
    <div className={styles.Catalog}>
      <h1 className={styles.title}>{t("catalog")}</h1>

      <div className={styles.itemsList}>
        {Object.keys(collection).map((doc) => {
          if (collection[doc].display) {
            // If it's a category, link to the CatalogPage. Else, link to the ItemPage
            return (
              collection[doc].category ?
                <Link
                  to={`/catalog/${doc}`}
                  key={doc}
                  className={styles.link}
                >
                  <CatalogItem id={doc} item={collection[doc]} />
                </Link>
                :
                <Link
                  to={`/catalog/${doc}/${collection[doc].id}`}
                  key={doc}
                  className={styles.link}
                  state={{ item: collection[doc] }}
                >
                  <CatalogItem id={doc} item={collection[doc]} />
                </Link>
            )
          }
        })}
      </div>
    </div>
  );
};

export default Catalog;
