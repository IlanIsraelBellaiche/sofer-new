const {Router} = require('express');

// Import the queries
const getCatalog = require('../controllers/getCatalog');
const getCollection = require('../controllers/getCollection');
const postMessage = require('../controllers/postMessage');
// const getBanniere = require('../controllers/getBanniere');

const router = Router();

// The queries
router.get('/getCatalog', getCatalog);
router.get('/getCollection', getCollection);
router.get('/getBanniere', getBanniere);

router.post('/postMessage', postMessage);

module.exports = router;