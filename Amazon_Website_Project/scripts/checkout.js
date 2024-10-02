import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/products.js';

let checkoutHtml = '';
quantityCalculator();

cart.forEach((cartItem) => {

    let cartProduct;
    let productId = cartItem.productId;

    products.forEach((product) => {
        if(product.id === productId){
            cartProduct = product;
        }
    });

    checkoutHtml += `<div class="cart-item-container js-cart-item-container-${cartProduct.id}">
        <div class="delivery-date">
        Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
        <img class="product-image"
            src="${cartProduct.image}">

        <div class="cart-item-details">
            <div class="product-name">
            ${cartProduct.name}
            </div>
            <div class="product-price">
            $${(cartProduct.priceCents/100).toFixed(2)}
            </div>
            <div class="product-quantity">
            <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
                Update
            </span>
            <span class="delete-quantity-link js-delete-quantity link-primary" data-product-id="${cartProduct.id}">
                Delete
            </span>
            </div>
        </div>

        <div class="delivery-options">
            <div class="delivery-options-title">
            Choose a delivery option:
            </div>
            <div class="delivery-option">
            <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${cartProduct.id}">
            <div>
                <div class="delivery-option-date">
                Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                FREE Shipping
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${cartProduct.id}">
            <div>
                <div class="delivery-option-date">
                Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                $4.99 - Shipping
                </div>
            </div>
        </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${cartProduct.id}">
            <div>
                <div class="delivery-option-date">
                Monday, June 13
                </div>
                <div class="delivery-option-price">
                $9.99 - Shipping
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>`;
});

document.querySelector('.js-order-summary').innerHTML = checkoutHtml;
document.querySelectorAll('.js-delete-quantity').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();
        quantityCalculator();
    });
});

function quantityCalculator(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-return-to-home-link')
    .innerHTML = `${cartQuantity} items`;
}
