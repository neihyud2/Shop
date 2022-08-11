var connection = require('../models/product.models')

module.exports.show = function (req, res) {
	var sql = `SELECT * FROM products Where isSold ='true'`
	connection.query(sql, function (err, result) {
		res.render('shop/cart', {
			products: result
		})
	})
}

module.exports.delete = function (req, res) {
	var id = req.params.id
	var sql = `UPDATE products SET isSold = 'false' WHERE productCode = ${id}`
	connection.query(sql, function (err, result) { })
	res.redirect('back')
}

module.exports.logout = function (req, res) {
	res.clearCookie('user')
	res.redirect('back')
}
