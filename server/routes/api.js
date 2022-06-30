const {Router} = require('express');

// Import the queries
const getCollection = require('../controllers/getCollection');
const postMessage = require('../controllers/postMessage');

const router = Router();

// The queries
router.get('/getCollection', getCollection);

router.post('/postMessage', postMessage);

module.exports = router;