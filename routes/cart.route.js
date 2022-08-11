const express = require('express')
const router = express.Router()
const controller = require('../controllers/cart.controller')
const middleware = require('../middleware/auth.mw')

router.get('/', middleware.checkLogin, controller.show)
router.get('/delete/:id', controller.delete)
router.get('/logout', controller.logout)

 module.exports = router
