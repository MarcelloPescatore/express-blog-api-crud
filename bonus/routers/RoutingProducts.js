const express = require('express')
const ProductsController = require('../controllers/ProductsController.js')
const router = express.Router()

// rotta index
router.get('/', ProductsController.index);
// rotta inPage
router.get('/page', ProductsController.show)
// rotta store
router.post('/store', ProductsController.store)
// rotta update
router.put('/update/:id', ProductsController.update)
// rotta delete 
router.delete('/delete/:id', ProductsController.destroy)

module.exports = router;