const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// / admin/add-product => POST
// filters for only get requests, extension of app.use
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/'); // useful express function
})

module.exports = router;