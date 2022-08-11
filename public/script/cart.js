const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const priceCurrentProducts = $$('.home-product-item__total')
const totalPrice = $('.home-product-totals__price')
const payment = $('#payment.have-user')
const openModalBtn = $('#payment')
const paymentNoUser = $('#payment.no-have-user')
const btnSuccess = $('.btn-success')
const moveToBtnPayment = $('.move-to-payment')

function start() {
    updateTotalPrice()
    if (payment) {
        payment.onclick = function () {
            payment.addEventListener('click', toggleModal)
        }
    }

    if (paymentNoUser) {
        paymentNoUser.onclick = function () {
            const login = $('.header__navbar-item--login')
            login.click()
        }
    }
}
start()

function updateTotalPrice() {
    let totalPriceProduct = 0;
    if (priceCurrentProducts) {
        priceCurrentProducts.forEach((priceCurrentProduct) => {
            totalPriceProduct += parseInt(priceCurrentProduct.innerText)
        })
    }
    totalPrice.innerHTML = totalPriceProduct
    if (totalPrice.innerText == '0') {
        openModalBtn.disabled = true
        openModalBtn.style.backgroundColor = '#ccc'
    }
}

function handleUpdatePrice(id) {
    const productId = $(`[product-id='${id}']`)
    const quantity = productId.querySelector('.home-product-item__quantity')
    const priceUpdate = productId.querySelector('.home-product-item__total')
    const priceNewProduct = parseInt(productId.querySelector('.home-product-item__price-current').innerText)
    var priceTotal = parseInt(totalPrice.innerText)
    priceTotal = priceTotal - parseInt(priceUpdate.innerText)
    const total = priceNewProduct * quantity.value
    priceTotal += total
    priceUpdate.innerText = total
    totalPrice.innerText = priceTotal
    if (totalPrice.innerText == '0') {
        openModalBtn.disabled = true
        openModalBtn.style.backgroundColor = '#ccc'
    }
}

moveToBtnPayment.onclick = function () {
    var value = moveToBtnPayment.getAttribute('href') == '#logo' ? '#payment' : '#logo'
    moveToBtnPayment.setAttribute('href', value)
}
