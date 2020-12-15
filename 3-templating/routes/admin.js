const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.render('add-product', { pageTitle: "Add Product", path: "/admin/add-product", formsCSS: true, productCSS: true, activeAddProduct: true })
});

// / admin/add-product => POST
// filters for only get requests, extension of app.use
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title});
    res.redirect('/'); // useful express function
})

exports.routes = router;
exports.products = products;