const express = require('express');
const router = express.Router()
const { getHomepage, getA } = require('../controllers/homeController');

router.get('/', getHomepage);
  
router.get('/a', getA);
  
module.exports = router;