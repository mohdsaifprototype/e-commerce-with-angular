document.getElementById('updateCart').addEventListener('click', function() {
  let quantity1 = document.getElementById('quantity1').value;
  let quantity2 = document.getElementById('quantity2').value;

  let subtotal1 = 650 * quantity1;
  let subtotal2 = 550 * quantity2;
  let total = subtotal1 + subtotal2;

  // Update the subtotals and totals on the page
  document.getElementById('subtotal1').textContent = `$${subtotal1}`;
  document.getElementById('subtotal2').textContent = `$${subtotal2}`;
  document.getElementById('cartSubtotal').textContent = `$${total}`;
  document.getElementById('cartTotal').textContent = `$${total}`;
});

// Optional: Apply Coupon Feature (for demonstration)
document.getElementById('applyCoupon').addEventListener('click', function() {
  let couponCode = document.getElementById('couponCode').value;

  if (couponCode === "DISCOUNT10") {
      let cartTotal = parseFloat(document.getElementById('cartTotal').textContent.replace('$', ''));
      let discount = cartTotal * 0.10; // 10% discount
      let newTotal = cartTotal - discount;

      // Update total with discount
      document.getElementById('cartTotal').textContent = `$${newTotal.toFixed(2)}`;
      alert('Coupon applied! 10% discount has been applied.');
  } else {
      alert('Invalid coupon code.');
  }
});
