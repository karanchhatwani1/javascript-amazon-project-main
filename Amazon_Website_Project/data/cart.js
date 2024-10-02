export const cart = [];

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