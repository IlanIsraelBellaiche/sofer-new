import React from "react";

import Catalog from "../../components/Catalog/Catalog";

/**
 * HomePage component.
 * Includes the catalog.
 * @component
 * @exports
 * @param {object} catalog The complet catalog. 
 */
const HomePage = ({ catalog }) => {
    return (
        <div>
            <Catalog catalog={catalog} />
        </div>
    )
}

export default HomePage;