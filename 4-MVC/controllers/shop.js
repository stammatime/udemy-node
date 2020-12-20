const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', { products: products, pageTitle: "Shop", path: '/' });
    });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { products: products, pageTitle: "All Products", path: '/products' });
    });
}

exports.getCart = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/cart', { pageTitle: "Your Cart", path: '/cart' });
    });
}

exports.getOrders = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/orders', { pageTitle: "Your Orders", path: '/orders' });
    });
}

exports.getCheckout = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/checkout', { pageTitle: "Checkout", path: '/checkout' });
    });
}