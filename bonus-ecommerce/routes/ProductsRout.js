const express = require('express')
const ProductsController = require('../controllers/ProductsController.js')
const router = express.Router()

router.get('/api', ProductsController.apiProducts)
router.post('/store', ProductsController.store)
router.delete('/:id', ProductsController.destroy)

module.exports = router;