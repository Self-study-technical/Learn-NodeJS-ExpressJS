var express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

// Define the route for home page
router.get('/search', siteController.search);

router.get('/', siteController.index);
module.exports = router;
