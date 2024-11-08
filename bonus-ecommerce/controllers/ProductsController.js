const products = require('../db/products.js')

const apiProducts = (req, res) => {
    res.json({
        data: products,
        counter: products.length
    })
}


module.exports = {
    apiProducts
}