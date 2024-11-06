const express = require('express')
const app = express()
const port = 3005
// importo le rotte
const ProductsRouts = require('./routers/RoutingProducts.js')

// middleware per file statici (le immagini)
app.use(express.static('./public'))
// parse incoming requests data 
app.use(express.json())

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('Product Rest API')
})


app.use('/products', ProductsRouts)