const express = require('express')
const router = express.Router()

const schemeController = require('../Controller/admin_cont')



// Add The Product
router.get("/reg",schemeController.addadmin)
router.post("/login",schemeController.login)

module.exports = router

