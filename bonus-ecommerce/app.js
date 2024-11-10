const express = require('express')
const app = express()
const PORT = 3007
const HOST = "http://localhost:"
const PostsRouter = require('./routes/ProductsRout.js')


app.use(express.json());

// avviamento server
app.listen(PORT, () => {
    console.log(`Servere avviato ${HOST}${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Ecommerce Rest API')
})

// File statici
app.use('/products', express.static('./public'))

// API products
app.use('/products', PostsRouter)