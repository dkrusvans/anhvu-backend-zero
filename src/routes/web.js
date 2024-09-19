const express = require('express');
const router = express.Router()
const { getHomepage, postCreateLnx } = require('../controllers/homeController');

router.get('/', getHomepage);
router.post('/create-lnx', postCreateLnx );

  
module.exports = router;