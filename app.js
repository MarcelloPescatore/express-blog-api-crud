const express = require('express');
const app = express();
const port = 3002;
// middleware errori
const notFoundMiddleware = require('./middlewares/notFound.js')
const loggerMiddleware = require('./middlewares/loggerMiddleware.js')
// importo le rotte
const PostsRouter = require('./routing/posts.js');
// asset publici
app.use(express.static('public'))

// middleware richiesta rotte
app.use('/', loggerMiddleware)
// middleware 
app.use(express.json());

// middleware per attivare un errore 500
/* app.use('/pizze', (req, res, next) => {
    throw new Error("You broke everything dude! 💥");
});  */
/* app.use('/posts', (req, res, next) => {
    const error = new Error("You broke everything dude! 💥");
    next(error);
});  */

// Posts API 
app.use('/posts', PostsRouter);

// start the server
app.listen(port, (req, res) => {
    console.log(`Server is running at http://localhost:${port}`);   
})

// richiamo middleware erroi rotta non trovata
app.use(notFoundMiddleware)

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