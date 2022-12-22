function addQuantity(e) {
  var qty = e.target.parentElement.parentElement.querySelector(".quantityOne");

  var qtyValueNum = parseInt(qty.innerHTML);
  qty.innerHTML = qtyValueNum + 1;
}
function reduceQuantity(e) {
  var qty = e.target.parentElement.parentElement.querySelector(".quantityOne");

  var qtyValueNum = parseInt(qty.innerHTML);
  qty.innerHTML = qtyValueNum - 1;
}
function deleteProduct(e) {
  var qty = e.target.parentElement.parentElement.remove();
}
