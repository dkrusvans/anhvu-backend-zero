const express = require('express');
const router = express.Router()

router.get('/', function (req, res) {
    res.send('Hello World do hoang anh vu 123 456')
    // res.render('sample.ejs')
})
  
router.get('/a', function (req, res) {
    // res.send('Hello World do hoang anh vu 123 456')
    res.render('sample.ejs')
})
  
module.exports = router;