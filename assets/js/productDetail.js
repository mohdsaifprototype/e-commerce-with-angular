// Function to change main image when a thumbnail is clicked
function changeImage(element) {
  const mainImage = document.getElementById('mainImage');
  mainImage.src = element.src;
}

// Function to handle colour selection
function selectColor(color) {
  alert('You selected: ' + color);
}

// Function to change quantity
function changeQuantity(amount) {
  const quantityInput = document.getElementById('quantity');
  let currentQuantity = parseInt(quantityInput.value);
  let newQuantity = currentQuantity + amount;
  if (newQuantity < 1) newQuantity = 1;
  quantityInput.value = newQuantity;
}