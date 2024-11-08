const express = require('express')
const ProductsController = require('../controllers/ProductsController.js')
const router = express.Router()

router.get('/api', ProductsController.apiProducts)

module.exports = router;