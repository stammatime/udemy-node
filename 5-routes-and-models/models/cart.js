const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json')

module.exports = class Cart {

    static addProduct(id, productPrice) {
        // Fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0 };
            if(!err){
                cart = JSON.parse(fileContent);
            }

            const existingProductIndex = cart.products.findIndex(prod => prod.id === id)
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products ];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 }
                cart.products = [ ...cart.products, updatedProduct ];
            }
            console.log(cart.totalPrice, productPrice)
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {

            })


        })
        // Analyze the cart => find existing product
        // add new product or increase quantity
    }



}