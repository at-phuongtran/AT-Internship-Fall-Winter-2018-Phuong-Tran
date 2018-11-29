var numberOfProduct = 0;
var products = document.getElementById("product-list-id");
var listBtn = document.getElementsByClassName('btn-cart');
//check value khi getItem
var dataOfStorage = JSON.parse(localStorage.getItem('product-id'));
if (dataOfStorage === null) {
  dataOfStorage = [];
}
function addData() {
  var productItem = '';
  for (var i = 0; i < productList.length; i++) {
    productItem += '<li class="product-item">'
                + '<img src="' + productList[i].image + '" alt="cart">'
                + '<div class="item-details">'
                + '<h3>' + productList[i].name + '</h3>'
                + '<p class="description">Description: <span>' + productList[i].description + '</span></p>'
                + '<p class="price">Price: <span>' + productList[i].price + '</span></p>' 
                + '<button class="btn-cart" id-product="' + productList[i].id + '">ADD TO CART</button>'
                + '</div>'
                + '</li>'
  }
  return productItem;
}
if (products !== null) {
  products.innerHTML = addData();
}
var count = 0;
var cart = {};
var productsAddCart = [];
function initEventListener() {
  for (let i = 0; i < listBtn.length; i++){
    listBtn[i].addEventListener("click", function() {
      var num = ++count;
      document.getElementById('numberOfProduct').innerHTML = num;
      listBtn[i].disabled = true;
      cart = listBtn[i].getAttribute('id-product');    
      productsAddCart.push(cart);
      console.log(productsAddCart);
      localStorage.setItem('product-id', JSON.stringify(productsAddCart));
    });
  }
}
document.getElementById('cart-id').addEventListener('click', function () {
  window.location = "cart.html";
})
initEventListener();
