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
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        console.log('hi', this.id, this.title)
    }

    save() {
        getProductsFromFile(products => {
            console.log(this.id)
            if(this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id)
                const updatedProducts = [ ...products];
                updatedProducts[existingProductIndex] = this;
                console.log(updatedProducts[existingProductIndex] )
                fs.writeFile(p, JSON.stringify(updatedProducts), err => {
                    console.log(err);
                })
            }
            else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), err => {
                    console.log(err);
                })
            }
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