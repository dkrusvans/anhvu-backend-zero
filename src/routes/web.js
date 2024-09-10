const express = require('express');
const router = express.Router()
const { getHomepage, postCreateUser,
    getCreatePage, getKhsxPage, getLnxPage, postCreateLnx,
    getUpdatePage, getLenhnhapxuatPage,
    getUpdateLnxPage
    
} = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/khsx', getLenhnhapxuatPage);
router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);
router.get('/createlnx', getLnxPage);
router.get('/update2/:id', getUpdateLnxPage);

router.post('/create-user', postCreateUser);
router.post('/create-lnx', postCreateLnx);

  
module.exports = router;