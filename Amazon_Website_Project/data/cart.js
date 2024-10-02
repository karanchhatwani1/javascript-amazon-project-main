export let cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1 
}];

export function addToCart(productId){
    let addedMessageTimeoutId;
    let matchingItem;
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    let quantity = Number(quantitySelector.value);
  
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
  
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId: productId,
        quantity: quantity
      });
    }
  
    if (addedMessageTimeoutId) {
      clearTimeout(addedMessageTimeoutId);
    }
  
    const addedMessage = document.querySelector(
      `.js-added-to-cart-${productId}`
    );
  
    addedMessage.classList.add('js-added-value');
  
    const timeOutId = setTimeout(() => {
      addedMessage.classList.remove('js-added-value');
    }, 2000);
  
    addedMessageTimeoutId = timeOutId;
  }

  export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
  }