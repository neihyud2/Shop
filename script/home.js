const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


function start() {
    const params = location.search
    var page = params.split('=')[1] || 1
    var type = location.pathname.slice(1) || 'A'
    // if (params.split('=')[1].substring(1) != 'page') page = 1;
    // console.log('type: ', type)
    // if (type != 'A' && type != 'B' && type != 'C') type = 'A'
    // Pagination
    $('.pagination-item--active').classList.remove('pagination-item--active')
    $(`[page='${page}']`).classList.add('pagination-item--active')

    // Category
    $('.category-item.category-item--active').classList.remove('category-item--active')
    $(`[typeproduct='${type}'].category-item`).classList.add('category-item--active')
}

start()

// Slide Show
let slideIndex = 0

function showSlide(n) {
    slideIndex += n
    const slides = $$('.slide-item')
    const dots = $$('.dot')
    if (slideIndex >= slides.length) {
        slideIndex = 0
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1
    }

    $('.slide-item.active').classList.remove('active')
    $('.dot.active').classList.remove('active')

    slides[slideIndex].classList.add('active')
    dots[slideIndex].classList.add('active')
}

function currentSlide(n) {
    slideIndex = 0;
    showSlide(n)
}
var myInternal = setInterval(() => showSlide(1), 3000)

function clearMyInternal() {
    clearInterval(myInternal)
    myInternal = setInterval(() => showSlide(1), 3000)
}

