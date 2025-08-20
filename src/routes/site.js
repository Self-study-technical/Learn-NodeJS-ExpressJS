var express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

// Define the route for home page
router.use('/search', siteController.search);

router.use('/', siteController.index);
module.exports = router;
