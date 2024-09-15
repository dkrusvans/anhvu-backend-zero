const express = require('express');
const routerAPI = express.Router()
const { getUsersAPI, postCreateUserAPI, getLenhnhapxuatsAPI,
    postCreateLnxAPI, putUpdateUserAPI, putUpdateLnxAPI,
    deleteUserAPI, deleteLnxAPI,
    postUploadSingleFileAPI, 
    } = require('../controllers/apiController')

const { postCreateCustomer, postCreateArrayCustomer,
    getAllCustomers, putUpdateCustomers, deleteCustomer,
    deleteArrayCustomer
 } = require('../controllers/customerController');

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
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomers);
routerAPI.delete('/customers', deleteCustomer);
routerAPI.delete('/customers-many', deleteArrayCustomer);

routerAPI.get('/info', (req,res) => {
    console.log("check: ",req.query)
    return res.status(200).json({
        data:req.query
    })
});
routerAPI.get('/info/:name/:address', (req,res) => {
    // console.log("check: ",req.params)
    return res.status(200).json({
        data:req.params
    })
});

module.exports = routerAPI;