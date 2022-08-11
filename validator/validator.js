const Validator = (options) => {
    const formElement = options.form
    options.rules.forEach((rule) => {
        const inputElement = formElement.querySelector(rule.selector)
        const messageElement = formElement.querySelector(rule.formMessage)
        inputElement.onblur = (e) => {
            const message = rule.test(e.target.value)
            if (message) {
                messageElement.innerText = message
            }
        }
        inputElement.oninput = (e) => {
            messageElement.innerText = ''
        }
    })
}

Validator.isRequire = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || "Vui lòng nhập trường này"
        }
    }
}


Validator({
    form: '.auth-form-register',
    formMessage: '.formMessage',
    rules: [
        Validator.isRequire('#')
    ],
})


Validator({
    form: '.auth-form-login',
    formMessage: '.formMessage',
    rules: [
        Validator.isRequire('#')
    ],
})