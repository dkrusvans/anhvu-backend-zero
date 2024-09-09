const express = require('express');
const router = express.Router()
const { getHomepage, getA, postCreateUser,
    getCreatePage, getKhsxPage 
    
} = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/create', getCreatePage);
router.get('/khsx', getKhsxPage);
router.post('/create-user', postCreateUser);
router.get('/a', getA);
  
module.exports = router;