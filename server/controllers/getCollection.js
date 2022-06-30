/* //@ts-check */

const { firestore } = require("../database/database");

/**
 * Get a single collection
 * @async
 * @param {object} req Contain a lot of data includes the name of the collection
 * @param {string} req.query.data The name of the collection
 * @return {object} Contains all the elements of the collection
 */
const getCollection = async (req, res, next) => {
    try {
        // Query for postman
        // const categoryId = req.query.category;
        
        // Query for the client side
        const collectionName = (req.query.data) ? req.query.data : "catalog";
        
        let response = {};

        // Get the collection
        const snapshot = await firestore.collection(collectionName).get();

        snapshot.forEach((doc) => {
            response[doc.id] = doc.data();
        })

        res.status(200).json(response);
    } catch (error) {
        console.log("Error: ", error);
    }
}

module.exports = getCollection;