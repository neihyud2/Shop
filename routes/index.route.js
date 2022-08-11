const homeRouter = require('./home.route')
const cartRouter = require('./cart.route')

function route(app) {
    app.use('/cart', cartRouter)
    app.use('/', homeRouter)
}

module.exports = route