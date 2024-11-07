const express = require('express')
const app = express()
const port = 3005
// importo le rotte
const ProductsRouts = require('./routers/RoutingProducts.js')
// importo middleware errori
const notFoundMiddleware = require('./middlewares/notFound.js')
const loggerMiddleware = require('./middlewares/loggerMiddleware.js')

// middleware per file statici (le immagini)
app.use(express.static('./public'))
// parse incoming requests data 
app.use(express.json())

// middleware logger personalizzato
app.use('/', loggerMiddleware)

// middleware per attivare un errore 500
/* app.use('/products', (req, res, next) => {
    throw new Error("You broke everything dude! 💥");
});  */
/* app.use('/products', (req, res, next) => {
    const error = new Error("You broke everything dude! 💥");
    next(error);
});  */

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('Product Rest API')
})

// middleware rotte
app.use('/products', ProductsRouts)

// middleware rotte non trovate
app.use('/', notFoundMiddleware)

// Ultimo middleware per gestire gli errori
app.use((err, req, res, next) => {
    console.log("Error: ", err.message);
    // questo stampa lo stack trace dell'errore
    console.error(err.stack);
    res.status(500).send({
      message: "Something went wrong",
      error: err.message
    })
});