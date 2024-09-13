const express = require('express');
const routerAPI = express.Router()
const { getUsersAPI, postCreateUserAPI, getLenhnhapxuatsAPI,
    postCreateLnxAPI, putUpdateUserAPI, putUpdateLnxAPI,
    deleteUserAPI, deleteLnxAPI
    } = require('../controllers/apiController')


routerAPI.get('/users', getUsersAPI);
routerAPI.get('/lenhnhapxuat', getLenhnhapxuatsAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.post('/lenhnhapxuat', postCreateLnxAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.put('/lenhnhapxuat', putUpdateLnxAPI);
routerAPI.delete('/users', deleteUserAPI);
routerAPI.delete('/lenhnhapxuat', deleteLnxAPI);
  
module.exports = routerAPI;