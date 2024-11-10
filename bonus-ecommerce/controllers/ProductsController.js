const products = require('../db/products.js')
const fs = require('fs')

const apiProducts = (req, res) => {
    res.json({
        data: products,
        counter: products.length
    })
}

const store = (req, res) => {
    const product = {
        id: Number(products[products.length - 1].id + 1),
        name: req.body.name,
        description: req.body.description,
        price: Number(req.body.price),
        quantità: req.body.quantità
    }

    products.push(product);

    fs.writeFileSync('./db/products.js', `module.exports = ${JSON.stringify(products, null, 4)}`)

    res.json({
        status: 201,
        data: products,
        counter: products.length
    })
}

const destroy = (req, res) => {
    const id = req.params.id
    const productChosed = products.find(product => product.id.toLowerCase() === id.toLowerCase())

    const newProducts = products.filter(product => product !== productChosed)
    // aggiorniamo il file 
    fs.writeFileSync('./db/db.js', `module.exports = ${JSON.stringify(newProducts, null, 4)}`)

    // restituiamo gli elementi aggiornati 
    res.status(200).json({
        status: 200,
        data: newProducts,
        counter: newProducts.length
    })
}  


module.exports = {
    apiProducts,
    store,
    destroy
}