import React from "react";
import { useParams } from "react-router-dom";

import Catalog from "../../components/Catalog/Catalog";

/**
 * CatalogPage component.
 * Includes the catalog.
 * @component
 * @exports
 * @returns 
 */
const CatalogPage = () => {
  // If get a category name, display the category. Else, display the complet catalog.
  const categoryName = useParams().categoryName || "catalog";

  return (
    <>
      <Catalog catalog={categoryName} />
    </>
  );
};

export default CatalogPage;
