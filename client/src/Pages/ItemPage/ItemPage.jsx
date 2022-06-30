import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import styles from "./ItemPage.module.css";

// import ItemCarousel from "../../Carousels/ItemCarousel/ItemCarousel";
import StyledCarousel from "../../components/StyledCarousel/StyledCarousel";

/**
 * ItemPage component.
 * Includes a description of the item and a {@link Carousel} with the images.
 * @component
 * @exports
 */
const ItemPage = () => {
  const { defaultLanguage } = useSelector((state) => ({
    ...state.languageReducer,
  }));

  const { defaultCurrency } = useSelector((state) => ({
    ...state.currencyReducer,
  }));

  const [t, i18n] = useTranslation("ItemPage");

  // Get the id from the url param.
  let itemId = useParams().itemId;
  // Get the item from the state link.
  const item = useLocation().state.item;

  // If it's ketoret, take the name like id.
  if (item.id.includes("ketoret")) {
    itemId = item[`name${defaultLanguage}`];
  }

  return (
    <div className={styles.ItemPage}>
      <div className={styles.description}>
        <h1 className={styles.h1}>{itemId}</h1>
        <span className={styles.price}>
          <span className={styles.priceTitle}>{t("prix")}</span>
          &nbsp;
          <span>
            :&nbsp;
            {item.prix}
            {defaultCurrency}
          </span>
        </span>
        <p className={styles.p}>
          <span className={styles.descriptionTitle}>{t("description")}</span>
          &nbsp;
          <span className={styles.descriptionContent}>
            :&nbsp;
            {item[`description${defaultLanguage}`]}
          </span>
        </p>
      </div>

      <div className={styles.carouselDiv}>
        <StyledCarousel 
          data={item.images} 
          width="30vw"
          height="40vh"
          slideBackgroundColor="white"
          thumbnails={true}
        />
      </div>
    </div>
  );
};

export default ItemPage;
