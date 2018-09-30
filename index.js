var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

    function getPrice() {
        return Math.floor(Math.random() * 100)
    }

    cart.push({itemName:item, itemPrice: getPrice()})

    return `${item} has been added to your cart.`

}

function viewCart() {
    var list = ""

    for (var i = 0; i < cart.length; i++){
        
    }
    return `In your cart, you have${list}`
}

function total() {

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
