/* document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("updateCart").addEventListener("click", function () {
    let quantity1 = document.getElementById("quantity1").value;
    let quantity2 = document.getElementById("quantity2").value;

    let subtotal1 = 650 * quantity1;
    let subtotal2 = 550 * quantity2;
    let total = subtotal1 + subtotal2;

    // Update the subtotals and totals on the page
    document.getElementById("subtotal1").textContent = `$${subtotal1}`;
    document.getElementById("subtotal2").textContent = `$${subtotal2}`;
    document.getElementById("cartSubtotal").textContent = `$${total}`;
    document.getElementById("cartTotal").textContent = `$${total}`;
  });

  // Optional: Apply Coupon Feature (for demonstration)
  document.getElementById("applyCoupon").addEventListener("click", function () {
    let couponCode = document.getElementById("couponCode").value;

    if (couponCode === "DISCOUNT10") {
      let cartTotal = parseFloat(
        document.getElementById("cartTotal").textContent.replace("$", "")
      );
      let discount = cartTotal * 0.1; // 10% discount
      let newTotal = cartTotal - discount;

      // Update total with discount
      document.getElementById("cartTotal").textContent = `$${newTotal.toFixed(
        2
      )}`;
      alert("Coupon applied! 10% discount has been applied.");
    } else {
      alert("Invalid coupon code.");
    }
  });
});
  */

/* // Function to show notifications
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "alert alert-success";
  notification.innerText = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000); // Remove notification after 3 seconds
}

// Function to update the subtotal for a specific row
function updateSubtotal(row, price) {
  const quantity = parseInt(row.querySelector("input[type='number']").value);
  const subtotal = price * quantity;
  row.querySelector(
    `#subtotal-${row
      .getAttribute("data-title")
      .replace(/\s+/g, "-")
      .toLowerCase()}`
  ).textContent = `$${subtotal.toFixed(2)}`;
  updateCartTotal(); // Update total after changing subtotal
}

// Function to update the total amount in the cart
function updateCartTotal() {
  const cartTableBody = document.querySelector("tbody");
  let total = 0;

  cartTableBody.querySelectorAll("tr").forEach((row) => {
    const subtotal = parseFloat(
      row.querySelector("td[id^='subtotal']").textContent.replace("$", "")
    );
    total += subtotal;
  });

  document.getElementById("cartSubtotal").textContent = `$${total.toFixed(2)}`;
  document.getElementById("cartTotal").textContent = `$${total.toFixed(2)}`;
}

// Function to add items to the cart
function addToCart(title, price) {
  const cartTableBody = document.querySelector("tbody");

  // Check if the item is already in the cart
  const existingRow = cartTableBody.querySelector(`tr[data-title="${title}"]`);
  if (existingRow) {
    // If it exists, update the quantity
    const quantityInput = existingRow.querySelector("input[type='number']");
    quantityInput.value = parseInt(quantityInput.value) + 1; // Increment quantity
    updateSubtotal(existingRow, price);
    showNotification(`${title} quantity updated!`);
  } else {
    // Create a new row for the cart
    const quantity = 1; // Default quantity for new items
    const subtotal = price * quantity;

    const newRow = document.createElement("tr");
    newRow.setAttribute("data-title", title);
    newRow.innerHTML = `
          <td>
              <img src="assets/img/${title
                .replace(/\s+/g, "-")
                .toLowerCase()}.png" alt="${title}" width="50">
              ${title}
          </td>
          <td>$${price}</td>
          <td>
              <input type="number" class="form-control w-50" value="${quantity}" min="1">
          </td>
          <td id="subtotal-${title
            .replace(/\s+/g, "-")
            .toLowerCase()}">$${subtotal.toFixed(2)}</td>
          <td><button class="remove-btn btn btn-danger btn-sm">Remove</button></td>
      `;

    cartTableBody.appendChild(newRow);

    // Add event listener for the remove button
    newRow.querySelector(".remove-btn").addEventListener("click", function () {
      newRow.remove();
      updateCartTotal();
      showNotification(`${title} has been removed from your cart.`);
    });

    showNotification(`${title} has been added to your cart!`);
  }
  updateCartTotal();
}

// Event listener for the checkout button
document.getElementById("checkoutBtn").addEventListener("click", function () {
  if (document.querySelector("tbody").children.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    // Clear the cart
    document.querySelector("tbody").innerHTML = "";
    updateCartTotal();
  }
});

// Event listener for updating cart quantities
document.getElementById("updateCart").addEventListener("click", function () {
  const cartTableBody = document.querySelector("tbody");
  cartTableBody.querySelectorAll("tr").forEach((row) => {
    const title = row.getAttribute("data-title");
    const price = parseFloat(
      row.querySelector("td:nth-child(2)").textContent.replace("$", "")
    );
    updateSubtotal(row, price);
  });
});

// Coupon application
document.getElementById("applyCoupon").addEventListener("click", function () {
  const couponCode = document.getElementById("couponCode").value;
  let cartTotal = parseFloat(
    document.getElementById("cartTotal").textContent.replace("$", "")
  );

  if (couponCode === "DISCOUNT10") {
    const discount = cartTotal * 0.1; // 10% discount
    const newTotal = cartTotal - discount;

    // Update total with discount
    document.getElementById("cartTotal").textContent = `$${newTotal.toFixed(
      2
    )}`;
    alert("Coupon applied! 10% discount has been applied.");
  } else {
    alert("Invalid coupon code.");
  }
});
 */