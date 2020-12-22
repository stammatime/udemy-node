const fs = require('fs');
const path = require('path');

const products = [];
const p = path.join(require.main.path, 'data','products.json' );

 const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if(!err) {
            cb(JSON.parse(fileContent));
        } else {
            cb([])
        }
    }); 
 }

module.exports = class Product{
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random().toString();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            })
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(product => product.id === id)
            cb(product);
        })
    }
}