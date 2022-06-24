const incProduct = Array.from(document.querySelectorAll('.product__quantity-control_inc'))
const decProduct = Array.from(document.querySelectorAll('.product__quantity-control_dec'))
const quantity = document.querySelectorAll('.product__quantity-value')
const button = Array.from(document.querySelectorAll('.product__add'))
const cart = document.querySelector('.cart__products')



for (let i = 0; i < incProduct.length; i++) {
    incProduct[i].addEventListener('click', (event) => {
        let index = incProduct.indexOf(event.target)
        let currentQuantity = Number(quantity[index].textContent)
        currentQuantity++
        currentQuantity  = String(currentQuantity)
        quantity[index].textContent = currentQuantity
    })
}

for (let i = 0; i < decProduct.length; i++) {
    decProduct[i].addEventListener('click', (event) => {
        let index = decProduct.indexOf(event.target)
        let currentQuantity = Number(quantity[index].textContent)
        currentQuantity--
        if ( currentQuantity >= 1) {
            currentQuantity = String(currentQuantity)
            quantity[index].textContent = currentQuantity
        } else {
            quantity[index].textContent = '1'
        }
    })
}

for (let el of button) {
    el.addEventListener('click', (event) => {
        let product = event.target.closest('.product');
        let productImage = product.querySelector('.product__image')
        let currentQuantity = product.querySelector('.product__quantity-value')

        let arrayOfCarts = Array.from(cart.children).find(
            (item) => item.dataset.id === product.dataset.id

        );
        
        if (arrayOfCarts) {
            let productQuantityElement = product.querySelector(
                '.product__quantity-value'
            );
            let productQuantity = Number(productQuantityElement.textContent.trim());

            let itemCartQuantityElement = arrayOfCarts.querySelector('.cart__product-count');
            let itemCartQuantity = Number(itemCartQuantityElement.textContent.trim());

            itemCartQuantityElement.textContent = itemCartQuantity + productQuantity;

        } else {
            cart.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product.dataset.id}">
                <img class="cart__product-image" src="${productImage.src}" >
                <div class="cart__product-count">${Number(currentQuantity.textContent)}</div>
            </div>`)


        }
    })
}