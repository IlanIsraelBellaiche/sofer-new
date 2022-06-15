const { firestore } = require("../database/database");

/**
 * @typedef {object} messageForm
 * @property {string} email
 * @property {string} name
 * @property {string} message
 * @property {(number|null)} phoneNumber
 */

/**
 * Post a message into the database
 * @method
 * @async 
 * @param {object} req Contain a lot of data includes the message to post
 * @param {messageForm} req.body Contains the message to post
 * @return {string} Return a success message
 * @todo Check that the success message is a string.
 */
const postMessage = async (req, res, next) => {
    // The message to post
    const body = req.body;
    // Current date
    const date = new Date();

    try {
        const data = {
            email: body.email,
            name: body.name,
            message: body.message, 
            date: date
        }

        if (body.phone) {
            data.phone = body.phone;
        }

        await firestore.collection("messages").add(data);

        res.status(201).json(true); 
    } catch (error) {
        console.log("Error: ", error);

        res.status(404).json(false);
    }
}

module.exports = postMessage;