/*
    LIENS DU CAROUSEL:
    https://reactjsexample.com/easy-to-use-responsive-and-customizable-carousel-component-for-react/
    https://github.com/sahilsaha7773/react-carousel-minimal
*/

import React, { useEffect, useState } from "react";
import { Carousel } from 'react-carousel-minimal';
import { useSelector } from "react-redux";

import styles from "./StyledCarousel.module.css";

import useWindowDimensions from "../../utils/getWindowDimensions/getWindowDimensions";

/**
 * StyledCarousel component.
 * @component
 * @exports
 * @param {string[]} data The urls of the images.
 * @param {string} width The width of the component.
 * @param {string} height The height of the component.
 * @param {string} slideBackgroundColor The color of the background of the component.
 * @param {boolean} thumbnail Display the thumbnail ?
 */
const StyledCarousel = ({ data, width, height, slideBackgroundColor, thumbnails }) => {
  const { defaultLanguage } = useSelector((state) => ({
    ...state.languageReducer,
  }));

  const [images, setImages] = useState([]);
  const { screenHeight, screenWidth } = useWindowDimensions();

  // Set the data in the good format.
  useEffect(() => {
    let myArray = [];

    data.forEach((item) => {
      let newItem = {
        image: item,
      };

      myArray.push(newItem);
    });

    setImages(myArray);
  }, [data, defaultLanguage]);

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  return (
    <div className={styles.container}>
      {images.length ? (
        <Carousel
          data={images} // Données sous forme de JSON : {image: IMAGE_PATH, caption: TEXT_CAPTION}
          automatic={false} // Défilement automatique
          // time={100} // Temps avant le changement automatique. Nécessite automatic={true}. Valeur par défault: 2000
          width={width} // Largeur du composant
          height={height} // Hauteur du composant
          slideNumber={false} // Indique le nombre d'images
          captionStyle={captionStyle} // Défini le style du texte dans le carousel (caption)
          radius="10px" // Défini le radius composant
          // slideNumberStyle // Défini le style de slideNumber
          captionPosition="bottom" // Défini la place du texte. Valeurs: top, center, bottom.
          dots={true} // Défini si on affiche les points (qui indique la page dans laquelle on est)
          // pauseIconColor // Défini la couleur de l'icon "pause"
          // pauseIconSize // Défini la taille de l'icon "pause"
          slideBackgroundColor={slideBackgroundColor} // Défini la couleur de font du Carousel
          slideImageFit="contain" // Défini si l'image est contenue ou peut dépasser du composant. Valeurs: contain, cover
          thumbnails={thumbnails} // Défini si on affiche les miniatures des photos
          // thumbnailWidth // Défini la taille des thumbnail. Valeur par défautl: 100px.

          style={{
            textAlign: "center",
            maxWidth: (screenWidth > 480)? "70vw" : "100%",
            maxHeight: "40vh",
            margin: "40px auto",
            padding: (screenWidth > 480)? "0" : "0 5px"
          }}
        />
      ) : null}
    </div>
  );
};

export default StyledCarousel;
