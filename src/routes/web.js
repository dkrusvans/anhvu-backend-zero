const express = require('express');
const router = express.Router()
const { getHomepage, postCreateLnx,getCreateLnx } = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/create', getCreateLnx);
router.post('/create-lnx', postCreateLnx);

  
module.exports = router;