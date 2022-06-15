const { firestore } = require("../database/database");

const getBanniere = async (req, res, next) => {
    try {
        // Get the collection
        const snapshot = await firestore.collection('banniere').get();

        let bannieres = {
            he: {},
            fr: {},
            en: {}
        };

        snapshot.forEach((doc) => {
            bannieres[doc.id] = doc.data().images;
        })

        res.status(200).json(bannieres);
    } catch (error) {
        console.log("Error: ", error);
    }
}

module.exports = getBanniere;