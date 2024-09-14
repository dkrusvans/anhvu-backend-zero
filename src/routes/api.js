const express = require('express');
const routerAPI = express.Router()
const { getUsersAPI, postCreateUserAPI, getLenhnhapxuatsAPI,
    postCreateLnxAPI, putUpdateUserAPI, putUpdateLnxAPI,
    deleteUserAPI, deleteLnxAPI,
    postUploadSingleFileAPI
    } = require('../controllers/apiController')

const { postCreateCustomer } = require('../controllers/customerController');

routerAPI.get('/users', getUsersAPI);
routerAPI.get('/lenhnhapxuat', getLenhnhapxuatsAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.post('/lenhnhapxuat', postCreateLnxAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.put('/lenhnhapxuat', putUpdateLnxAPI);
routerAPI.delete('/users', deleteUserAPI);
routerAPI.delete('/lenhnhapxuat', deleteLnxAPI);

routerAPI.post('/file', postUploadSingleFileAPI);

routerAPI.post('/customers', postCreateCustomer);

module.exports = routerAPI;