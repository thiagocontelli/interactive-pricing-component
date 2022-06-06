let body = document.querySelector('body')
let pageViews = document.querySelector('#page-views')
let price = document.querySelector('#price')
let slider = document.querySelector('#slider')
let toggleBtn = document.querySelector('#switch-bill')

slider.setAttribute("oninput", "updatePricePageViewsMonth()")

toggleBtn.addEventListener('change', ({target}) => {
    if(target.checked) {
        price.textContent = '$12.00'
        slider.setAttribute("oninput", "updatePricePageViewsYear()")
    } else {
        slider.removeAttribute("oninput", "updatePricePageViewsYear()")
        slider.setAttribute("oninput", "updatePricePageViewsMonth()")
    }
})

body.addEventListener('load', updatePricePageViewsMonth())

function updatePricePageViewsMonth() {
    pageViews.textContent = '1 0 0 K'
    price.textContent = '$16.00'
    switch (slider.value) {
        case '1' :
            pageViews.textContent = '1 0 K'
            price.textContent = '$8.00'
            break
        case '2' :
            pageViews.textContent = '5 0 K'
            price.textContent = '$12.00'
            break
        case '3' :
            pageViews.textContent = '1 0 0 K'
            price.textContent = '$16.00'
            break
        case '4' :
            pageViews.textContent = '5 0 0 K'
            price.textContent = '$24.00'
            break
        case '5' :
            pageViews.textContent = '1 M'
            price.textContent = '$36.00'
            break
    }
}

function updatePricePageViewsYear() {
    switch (slider.value) {
        case '1' :
            pageViews.textContent = '1 0 K'
            price.textContent = '$6.00'
            break
        case '2' :
            pageViews.textContent = '5 0 K'
            price.textContent = '$9.00'
            break
        case '3' :
            pageViews.textContent = '1 0 0 K'
            price.textContent = '$12.00'
            break
        case '4' :
            pageViews.textContent = '5 0 0 K'
            price.textContent = '$18.00'
            break
        case '5' :
            pageViews.textContent = '1 M'
            price.textContent = '$27.00'
            break
    }
}