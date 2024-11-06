// questo ci permette di importare l'array di prodotti e accedervi 
const products = require('../db/products')

// per aggiornare il file
const fs = require('fs')

// rotta index mostro i prodotti in json
const index = (req, res) => {
    res.status(200).json({
        status: 200,
        data: products,
        counter: products.length
    })
}

// rotta per mostrare i prodotti in pagina
const inPage = (req, res) => {
    // creo una variabile markup dove aggiungerci il markup ciclato nel forEch
    let markup = ''

    // ciclo nell'array products
    products.forEach(product => {
        const { name, category, price, image } = product;

        return markup += `
            <li>
                <img src="/img/${image}" style="width: 150px; height: 100px"></img> <br>
                <h2>${name}</h2>
                <span>${category}</span>
                <h2>${price}€</h2>
            </li>
        
        `
    })

    return res.send(`<ul>${markup}</ul>`)

}

// rotta per aggiungere un prodotto
const store = (req, res) => {
    // creiamo il nuovo prodotto prendendo i valori dal body
    const product = {
        id: Number(products[products.length - 1].id + 1),
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category
    }
    // aggiungiamo il prodotto nell'array
    products.push(product)
    // aggiorniamo il file 
    fs.writeFileSync('./db/products.js', `module.exports = ${JSON.stringify(products, null, 4)}`)

    // restituiamo un json con l'array aggiornato
    return res.status(201).json({
        status: 201,
        data: products,
        count: products.length
    })
}

// rotta per aggiornare un prodotto
const update = (req, res) => {

    // trovo il prodotto con l'id della richiesta
    const product = products.find(product => product.id === Number(req.params.id))

    // controlliamo se esiste un prodotto con quell'id
    if (!product) {
        return res.status(404).json({ error: "No product found with that id" })
    }

    // aggiorniamo prendendo i valori dal body
    product.name = req.body.name;
    product.image = req.body.image;
    product.price = req.body.price;
    product.category = req.body.category;

    // aggiorniamo il file 
    fs.writeFileSync('./db/products.js', `module.exports = ${JSON.stringify(products, null, 4)}`)

    // restituiamo un json con l'array aggiornato
    return res.status(201).json({
        status: 201,
        data: products,
        count: products.length
    })
}

// rotta per eliminare un prodotto
const destroy = (req, res) => {
    // trovo il prodotto con l'id della richiesta
    const product = products.find(product => product.id === Number(req.params.id))

    // controlliamo se esiste un prodotto con quell'id
    if (!product) {
        return res.status(404).json({ error: "No product found with that id" })
    }

    // creiamo un nuovo array products senza quel product
    const newProducts = products.filter(product => product.id !== Number(req.params.id))

    // aggiorniamo il file
    fs.writeFileSync = ('./db/products.js', `module.exports = ${JSON.stringify(newProducts, null, 4)}`)

    // ritorniamo il nuovo array
    res.status(203).json({
        status: 202,
        data: newProducts,
        counter: newProducts.length
    })
}

module.exports = {
    index,
    inPage,
    store,
    update,
    destroy
}