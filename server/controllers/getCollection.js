const { firestore } = require("../database/database");

/**
 * @typedef {object} CollectionElement
 * @property {string} id The id of item
 * @property {string} namefr The name in French 
 * @property {string} nameen The name in English 
 * @property {string} namehe The name in Hebrew 
 * @property {string} descriptionfr The description in French 
 * @property {string} descriptionhe The description in English 
 * @property {string} descriptionen The description in Hebrew 
 * @property {prix} number The price of the item
 * @property {string} image The default image of the item
 * @property {string[]} images All the images of the item
 */

/**
 * Get a single collection
 * @async
 * @param {object} req Contain a lot of data includes the name of the collection
 * @param {string} req.query.data The name of the collection
 * @return {CollectionElement[]} Contains all the elements of the collection
 * @todo Change "prix" into "price"
 * @todo Check that "prix" is really a number
 * @todo Check that "id" is really a string
 */
const getCollection = async (req, res, next) => {
    try {
        // Query for postman
        // const categoryId = req.query.category;
        
        // Query for the client side
        const categoryId = req.query.data;
        
        let response = {};

        // Get the collection
        const snapshot = await firestore.collection(categoryId).get();

        // Create an object with the data
        let data = {}, tmp;

        snapshot.forEach((doc) => {
            tmp = doc.data();

            data[doc.id] = {
                namefr: tmp.nameFr,
                namehe: tmp.nameHe,
                nameen: tmp.nameEn,
                prix: tmp.prix,
                descriptionfr: tmp.descriptionFr,
                descriptionen: tmp.descriptionEn,
                descriptionhe: tmp.descriptionHe,
                id: tmp.id,
                image: tmp.image,
                images: tmp.images,
            }
        })

        response.category = data;

        res.status(200).json(response); 
    } catch (error) {
        console.log("Error: ", error);
    }
}

module.exports = getCollection;