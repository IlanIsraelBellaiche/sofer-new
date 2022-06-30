import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Catalog from "../../components/Catalog/Catalog";
import StyledCarousel from "../../components/StyledCarousel/StyledCarousel";

import { requestCollection } from "../../Request/RequestCollection";
import useWindowDimensions from "../../utils/getWindowDimensions/getWindowDimensions";

/**
 * HomePage component.
 * Includes the catalog.
 * @component
 * @exports
 */
const HomePage = () => {
  const [banner, setBanner] = useState();
  const { screenHeight, screenWidth } = useWindowDimensions();

  const { defaultLanguage } = useSelector((state) => ({
    ...state.languageReducer,
  }));

  useEffect(() => {
    requestCollection.getActive("banniere").then((res) => {
      setBanner(res);
    });
  }, [screenWidth]);

//   console.log("WIDTH: ", width>480);
  console.log(screenWidth)

  return (
    <div>
      {banner && (
        <StyledCarousel
          data={banner[defaultLanguage].images}
          width={screenWidth > 480 ? "70vw" : "100%"}
          height="40vh"
          slideBackgroundColor="black"
          thumbnails={false}
        />
      )}
      <Catalog catalog="catalog" />
    </div>
  );
};

export default HomePage;
