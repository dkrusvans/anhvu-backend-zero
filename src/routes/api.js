const express = require('express');
const routerAPI = express.Router()
const { getUsersAPI, postCreateUserAPI, getLenhnhapxuatsAPI,
    postCreateLnxAPI } = require('../controllers/apiController')


routerAPI.get('/users', getUsersAPI);
routerAPI.get('/lenhnhapxuat', getLenhnhapxuatsAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.post('/lenhnhapxuat', postCreateLnxAPI);
  
module.exports = routerAPI;