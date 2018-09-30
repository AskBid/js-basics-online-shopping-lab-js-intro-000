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

    cart.push({itemName: item, itemPrice: getPrice()})

    return `${item} has been added to your cart.`

}

function viewCart() {
    if (cart.length === 0) {
        return "Your shopping cart is empty."
    }
    var list = ""

    for (var i = 0; i < cart.length; i++) {
        var name = cart[i].itemName;
        var price = cart[i].itemPrice;
        list += `${name} at ${price}`
        if (i < cart.length-2) {
            list += ','
        }
    }
    list += '.'

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
