
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', { pageTitle: "Add Product", path: "/admin/add-product", editing: false });
}

exports.postAddProduct = (req, res, next) => {
    const id = null;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(id, title, imageUrl, description, price);
    product.save();
    res.redirect('/'); // useful express function
}

exports.getEditProduct = (req, res, next) => { 
    const editMode = req.query.editing;
    if(!editMode) { return res.redirect('/')}
    const prodId = req.params.productId;
    Product.findById(prodId, (product) => {
        if(!product) return res.redirect('/');
        res.render('admin/edit-product', { pageTitle: "Edit Product", path: "/admin/edit-product", editing: editMode, product: product });
    })
}


exports.postEditProduct = (req, res, next) => { 
    console.log(req.body)
    const id = req.body.id;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(id, title, imageUrl, description, price);
    product.save();
    res.redirect('/admin/products'); // useful express function
}


exports.getProducts = (req, res, next ) => {
    Product.fetchAll((products) => {
        res.render('admin/products', { products: products, pageTitle: "Admin Products", path: '/admin/products' });
    });
}