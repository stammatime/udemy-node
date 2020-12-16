const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// / admin/add-product => POST
// filters for only get requests, extension of app.use
router.post('/add-product', productsController.postAddProduct)

exports.routes = router;