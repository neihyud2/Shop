const express = require('express')
const router = express.Router()
const controller = require('../controllers/home.controller')
const middleware = require('../middleware/auth.mw')


router.get('/', middleware.checkLogin, controller.show)
router.post('/success', controller.success)
router.get('/logout', controller.logout)
router.get('/:type', controller.show)
router.get('/add/:id', controller.addCart)

router.post('/', middleware.checkLogin, controller.show)
router.post('/login', controller.login)
router.post('/register', controller.register)


module.exports = router