const Product = require('../models/product');
const Cart = require('../models/cart');

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

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    console.log(prodId);
    Product.findById(prodId, (product) => {
        res.render('shop/product-detail', { product: product, pageTitle: "Product Details", path: `/products`})
    })
}

exports.getCart = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/cart', { pageTitle: "Your Cart", path: '/cart' });
    });
}

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
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