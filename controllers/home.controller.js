var connection = require('../models/product.models')
const { nanoid } = require('nanoid')

module.exports.show = function (req, res) {
	var type = req.params.type || 'A'
	var page = req.query.page || 1
	var perPage = 8
	var start = (page - 1) * perPage
	var end = page * 8
	var sql = `SELECT * FROM products WHERE productLine = '${type}'`
	connection.query(sql, function (err, result) {
		res.render('shop/home', {
			products: result.slice(start, end),
		})
	})
}

module.exports.addCart = function (req, res) {
	var id = req.params.id
	var sql = `UPDATE products SET isSold = 'true' WHERE productCode = ${id}`
	connection.query(sql, function (err, result) { })
	res.redirect('/')
}

module.exports.success = async function (req, res) {
	await getProduct(req, res)
	var sql = `UPDATE products SET isSold = 'false' WHERE isSold = 'true'`
	connection.query(sql, function (err, result) { res.redirect('/') })
}

module.exports.register = function (req, res) {
	const userId = nanoid(10)
	const username = req.body.username
	const userPhone = req.body.phone
	const userAddress = req.body.address
	const account = req.body.account
	const password = req.body.password
	var sql = `INSERT INTO customers (customerId, customerName, customerPhone, customerAddress, customerUsername, customerPassword) 
	VALUES ('${userId}' ,'${username}', '${userPhone}', '${userAddress}','${account}', '${password}')`

	connection.query(sql, (err, result) => { })

	res.cookie('user', userId)
	res.redirect('/')
}

module.exports.login = function (req, res) {
	const account = req.body.account
	const password = req.body.password
	var sql = `SELECT * FROM customers WHERE customerUsername = '${account}' AND customerPassword = '${password}'`
	connection.query(sql, function (err, result) {
		if (result.length) {
			res.cookie('user', result[0].customerId)
			res.redirect('/')
		} else {
			res.send('wrong pass and account')
		}
	})
}

module.exports.logout = function (req, res) {
	res.clearCookie('user')
	res.redirect('back')
}


async function getProduct(req, res) {
	const sol = req.body
	sol[Object.keys(sol)[0]]
	for (const property in sol) {
		var pro = parseInt(property)
		let sql2 = `Select buyPriceNew from products where productCode = ${pro}`
		var priceEach = 0
		connection.query(sql2, function (err, result) {
			priceEach = result[0].buyPriceNew
			var productList = `('${req.cookies.user}', '${property}', '${sol[property]}', '${priceEach}')`
			var sql3 = `INSERT INTO orders (customerId, productCode, quantityOrdered, priceEach) VALUES
				${productList}
				`
			connection.query(sql3, function (err, result) { })
		})
	}
}