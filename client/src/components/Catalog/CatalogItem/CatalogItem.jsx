import React from "react";
import { useSelector } from "react-redux";

import styles from "./CatalogItem.module.css";

// Category typedef
/**
 * @typedef Category
 * @property {boolean} category Say if the item is a category.
 * @property {boolean} display Say if the category have to be displayed.
 * @property {number} id Id of the category.
 * @property {string} image The image of the category.
 * @property {string} nameEn The name in English.
 * @property {string} nameFr The name in French.
 * @property {string} nameHe The name in Hebrew.
 */
// Element typedef
/**
 * @typedef Element 
 * @property {string} descriptionEn The description of the Element in English.
 * @property {string} descriptionFr The description of the Element in French.
 * @property {string} descriptionHe The description of the Element in Hebrew.
 * @property {boolean} display Say if the Element have to be displayed.
 * @property {string} id The id of the Element.
 * @property {string} image The main image of the Element.
 * @property {string[]} images The images of the Element.
 * @property {string} nameEn The name of the Element in English.
 * @property {string} nameFr The name of the Element in French.
 * @property {string} nameHe The name of the Element in Hebrew.
 * @property {number} price The price of the Element.
 */

/**
 * CatalogItem component.
 * Includes an image and the name/id of the item.
 * On click, redirect to the page of the Category or to the page of the item.
 * @component
 * @exports
 * @param {Category | Element} item The complet item
 * @param {string} id The id of the item.
 */
const CatalogItem = ({ item, id }) => {
  const { defaultLanguage } = useSelector((state) => ({
    ...state.languageReducer,
  }));

  return (
    <div className={styles.CatalogItem}>
      <div className={styles.imgDiv}>
        <img src={item.image} alt={id} className={styles.img} />
      </div>
      <span className={styles.name}>
        {
          // If it's a category, or ketoret, display the name. Else display the id.
          (item.category || item.id.includes("ketoret")) ?
            item[`name${defaultLanguage}`]
            :
            item.id
        }
      </span>
    </div>
  );
};

export default CatalogItem;