var connection = require('../models/product.models')

module.exports.checkLogin = function (req, res, next) {
    if (req.cookies.user) {
        var sql = `SELECT * FROM customers WHERE customerId = '${req.cookies.user}'`
        connection.query(sql, function (err, result) {
            res.locals.userId = req.cookies.user
            try {
                res.locals.userName = result[0].customerName
            }
            catch (err) {
                console.log('err: ', err)
            }
        })

    }
    var sql2 = `SELECT COUNT(isSold) FROM products WHERE isSold = 'true'`
    connection.query(sql2, function (err, result) {
        res.locals.quantity = result[0][`COUNT(isSold)`]
    })
    next()
}