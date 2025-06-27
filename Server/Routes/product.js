const express = require('express')
const router = express.Router()

const schemeController = require('../Controller/productController')



// Add The Product
router.post("/add",schemeController.addscheme)


router.get("/sel",schemeController.sel)
router.post("/del",schemeController.del)
router.get("/edit",schemeController.edit)

module.exports = router

