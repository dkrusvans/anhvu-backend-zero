const express = require('express');
const router = express.Router()
const { getHomepage, postCreateLnx, getCreateLnx, getUpdateLnx,
    postUpdateLnx, postDeleteLnx,postHandleRemoveLnx } = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/create', getCreateLnx);
router.post('/create-lnx', postCreateLnx);
router.get('/update/:id', getUpdateLnx);
router.post('/update-lnx', postUpdateLnx);
router.get('/delete-lnx/:id', postDeleteLnx);
router.post('/delete-lnx', postHandleRemoveLnx); 
module.exports = router;