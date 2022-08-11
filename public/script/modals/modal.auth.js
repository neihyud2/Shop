const modalAuthOverlay = document.querySelector('.modal-auth__overlay')
const modalAuth = document.querySelector('.modal-auth')

const logout = document.querySelector('li.header__navbar-user-item.header__navbar-user-item--separate')
// Show Log in
const register = $('.header__navbar-item--register')
const login = $('.header__navbar-item--login')
const formRegister = $('.auth-form-register')
const formLogin = $('.auth-form-login')

register.onclick = function () {
    modalAuth.classList.remove('hide')
    formRegister.classList.remove('hide')
}

login.onclick = function () {
	modalAuth.classList.remove('hide')
    formLogin.classList.remove('hide')
}

modalAuthOverlay.addEventListener('click', (e) => {
	if (e.target == e.currentTarget) {
		modalAuth.classList.add('hide')
		formRegister.classList.add('hide')
		formLogin.classList.add('hide')
	}
})

window.onclick = function (e) {
	console.log(e.target)
}
