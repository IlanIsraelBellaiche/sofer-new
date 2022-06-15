const { firestore } = require("../database/database");

/**
 * @typedef {object} Collection
 * @property {string} namefr The name in French 
 * @property {string} nameen The name in English 
 * @property {string} namehe The name in Hebrew 
 * @property {string} image The default image of the collection
 */

/**
 * Get all the collections
 * @async 
 * @return {Collection[]} Contains all the informations about a {@link Collection}
 */
const getCatalog = async (req, res, next) => {
    try {
        let response = {};

        // Get the collection
        const snapshot = await firestore.collection('catalog').get();

        // Create an object with the data
        let data = {};
        let tmp;

        snapshot.forEach((doc) => {
            tmp = doc.data();

            if (tmp.display) {
                data[doc.id] = {
                    namehe: tmp.nameHe,
                    namefr: tmp.nameFr,
                    nameen: tmp.nameEn,
                    image: tmp.image,
                }
            }
        })

        response.catalog = data;

        res.status(200).json(response); 
    } catch (error) {
        console.log("Error: ", error);
    }
}

module.exports = getCatalog;