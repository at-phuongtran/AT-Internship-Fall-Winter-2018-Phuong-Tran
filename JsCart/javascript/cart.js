var total = 0;
var content = '';
var idProduct = JSON.parse(localStorage.getItem('product-id'));
var listRemoveBtn = document.getElementsByClassName('remove-btn');
var cartTable = document.getElementById('body');
var totalProduct = document.getElementById('total');
var numberOfProduct = document.getElementById('numberOfProduct');
if (idProduct === null) {
  idProduct = [];
}
function addData() {
  var array = [];
  for(var i = 0; i < productList.length; i++) {
    for(var j = 0; j < idProduct.length; j++) {
      if(idProduct[j] == productList[i].id) {
        array.push(productList[i]);
        total += productList[i].price;
      }
    }
  }
  for(var i = 0; i < array.length; i++){
    content += '<tr data-id="'+ array[i].id + '" class="table-product">'
            + '<td class="product-details">'
            + '<img class="product-img" src="'+ array[i].image + '" alt="placeholder+image">'
            + '<div class="product-content">'
            + '<h3 class="product-name">' + array[i].name + '</h3>'
            + '<p class=""product-description>' + array[i].description + '</p>'
            + '</div>'
            + '</td>'
            + '<td class="product-details"><div><p>1</p></div></td>'
            + '<td class="product-details">' + array[i].price + '</td>'
            + '<td><button class="remove-btn" id-product="' + array[i].id + '">Remove</button></td></tr>';
  }
  return content;
}
function renderView() {
  cartTable.innerHTML = addData();
  totalProduct.innerHTML = total + ' VND';
  numberOfProduct.innerHTML = idProduct.length;
}
renderView();
//Remove Btn
for(var i = 0; i < listRemoveBtn.length; i++){
  listRemoveBtn[i].addEventListener('click', function(){
    var qs = confirm("You want to delete this product ?");
    if (qs == true) {
      //get list product from storage
      var idProduct = JSON.parse(localStorage.getItem('product-id'));
      console.log(idProduct);

      var trElement = this.parentElement.parentElement; //tr
      var idP = +trElement.getAttribute('data-id');

      for(var i = 0; i < productList.length; i++) {
        if(idP === productList[i].id) {
          total -= productList[i].price;
        }
      }
      //filter element want delete
      idProduct = idProduct.filter(function(value){
        return value !== idP;
      });

      //remove on DOM and update 
      cartTable.removeChild(trElement);
      totalProduct.innerHTML = total + ' VND';
      numberOfProduct.innerHTML = idProduct.length;

      //Save to localStorage
      localStorage.setItem('product-id', JSON.stringify(idProduct));
    }
    else {
      totalEle.innerHTML =  total + ' VND';
      cartNumber.innerHTML = idproducts.length;
    }
  });
}
