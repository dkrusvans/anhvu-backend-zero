const express = require('express');
const router = express.Router()
const { getHomepage, postCreateUser,
    getCreatePage, getKhsxPage, getLnxPage, postCreateLnx,
    getUpdatePage, getLenhnhapxuatPage,
    getUpdateLnxPage, postUpdateUser, postUpdateLnx, postDeleteUser,
    postHandleRemoveUser, postDeleteLnx,
    postHandleRemoveLnx
    
} = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/khsx', getLenhnhapxuatPage);
router.get('/create', getCreatePage);
router.get('/createlnx', getLnxPage);
router.get('/update/:id', getUpdatePage);
router.get('/update2/:id', getUpdateLnxPage);

router.post('/create-user', postCreateUser);
router.post('/create-lnx', postCreateLnx);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-lnx/:id', postDeleteLnx);
router.post('/delete-user/', postHandleRemoveUser);
router.post('/delete-lnx/', postHandleRemoveLnx);
router.post('/update-lnx', postUpdateLnx);
  
module.exports = router;