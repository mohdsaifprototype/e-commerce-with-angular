// Apply Coupon Function
function applyCoupon() {
  const couponCode = document.getElementById("couponCode").value;
  if (couponCode === "DISCOUNT10") {
      alert("Coupon applied successfully! You get 10% off.");
  } else {
      alert("Invalid coupon code.");
  }
}

// Place Order Function
function placeOrder() {
  const firstName = document.getElementById("firstName").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  if (firstName && address && city && phone && email) {
      alert("Order placed successfully!");
  } else {
      alert("Please fill in all required fields.");
  }
}