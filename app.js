let pageViews = document.querySelector('#page-views'),
    price = document.querySelector('#price'),
    duration = document.querySelector('#duration'),
    slider = document.querySelector('#slider'),
    toggleBtn = document.querySelector('#switch-bill')

toggleBtn.onclick = () => {

    if(toggleBtn.checked) {
        let priceInt = parseInt(price.innerText)
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`
        duration.textContent = '/year'
    } else {
        refreshPrices()
        duration.textContent = '/month'
    }

}

slider.addEventListener('input', refreshPrices)

function refreshPrices() {

    if(slider.value === '1') {

        if(toggleBtn.checked) {
            price.textContent = `${(8 - (8 * .25)) * 12}`
            duration.textContent = '/year'
        } else {
            price.textContent = '8'
        }

        pageViews.textContent = '1 0 K'

    }

    if(slider.value === '2') {

        if(toggleBtn.checked) {
            price.textContent = `${(12 - (12 * .25)) * 12}`
            duration.textContent = '/year'
        } else {
            price.textContent = '12'
        }

        pageViews.textContent = '5 0 K'

    }

    if(slider.value === '3') {

        if(toggleBtn.checked) {
            price.textContent = `${(16 - (16 * .25)) * 12}`
            duration.textContent = '/year'
        } else {
            price.textContent = '16'
        }

        pageViews.textContent = '1 0 0 K'

    }

    if(slider.value === '4') {

        if(toggleBtn.checked) {
            price.textContent = `${(24 - (24 * .25)) * 12}`
            duration.textContent = '/year'
        } else {
            price.textContent = '24'
        }

        pageViews.textContent = '5 0 0 K'

    }

    if(slider.value === '5') {

        if(toggleBtn.checked) {
            price.textContent = `${(36 - (36 * .25)) * 12}`
            duration.textContent = '/year'
        } else {
            price.textContent = '36'
        }

        pageViews.textContent = '1 M'

    }

}