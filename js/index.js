function deleteItem(event) {

  event.target.parentElement.parentElement.remove();
}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

  // TODO: Make the input number box update the item total automatically

  // Get prices and quatity
  let unitPrice, quantity, totalPrice, totalCart = 0;;

  // Convert to array
  let products = [...document.getElementsByClassName('product')];
  
  // Iterate through products array
  products.forEach(product => {

    // Get product quantity and price
    unitPrice = parseFloat(product.querySelector('.unit-price').innerText);
    quantity = parseFloat(product.querySelector('.quantity').value);
    
    // Calculate total price
    totalPrice = unitPrice * quantity;

    // Update total price on screen
    product.querySelector(".total-price").innerHTML = totalPrice;

    // Update cart total
    totalCart = totalCart + totalPrice;
  })

  // Update cart total on screen
  document.getElementsByClassName('total-cart')[0].innerHTML = totalCart;
}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

  // Get news values from input field
  let productName = document.getElementsByClassName('new-product-name')[0].value;
  let unitPrice = parseFloat((document.getElementsByClassName('new-unit-price')[0].value));

  // Generate html for new product
  newHtml = 
    `<div class="item"><span class="product-name">${productName}</span></div>
      <div class="item">$<span class="unit-price">${unitPrice}</span></div>
      <div class="item">
        <label for="qty">Qty</label>
        <input type="number" name="qty" class="input quantity" value=0>
      </div>
      <div class="item">$<span class="total-price">0.00</span></div>
      <div class="item"><button class="btn btn-delete">Delete</button></div>`;

  // Create new div element
  let newProduct = document.createElement('div')

  // Place the new div in the document
  cartClass = document.getElementsByClassName('cart')[0];
  cartClass.appendChild(newProduct);

  // Assign the appropriate class to the new div
  newProduct.className = 'product'

  // Insert html code into new div
  newProduct.innerHTML = newHtml;
  update();
}

function update() {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

window.onload = function() {
  this.update();
};
