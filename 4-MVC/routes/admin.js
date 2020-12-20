const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// / admin/add-product => POST
// filters for only get requests, extension of app.use
router.post('/add-product', adminController.postAddProduct);

exports.routes = router;