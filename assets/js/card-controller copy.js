// card-controller.js
// Card data
const generateCard = [
  {
    image: "assets/img/g92-2-500x500 1.png",
    title: "HAVIT HV-G92 Gamepad",
    price: 260,
    mrpPrice: 160,
    discount: "-40%",
    ratings: [1, 1, 1, 1, 0.5],
    reviews: 88,
  },
  {
    image: "assets/img/ak-900-01-500x500 1.png",
    title: "AK-900 Wired Keyboard",
    price: 960,
    mrpPrice: 1160,
    discount: "-35%",
    ratings: [1, 1, 1, 1, 0.5],
    reviews: 89,
  },
  {
    image: "assets/img/monitor.png",
    title: "IPS LCD Gaming Monitor",
    price: 370,
    mrpPrice: 400,
    discount: "-30%",
    ratings: [1, 1, 1, 1, 0.5],
    reviews: 88,
  },
  {
    image: "assets/img/chair.png",
    title: "S-Series Comfort Chair",
    price: 325,
    mrpPrice: 400,
    discount: "-25%",
    ratings: [1, 1, 1, 1, 0.5],
    reviews: 85,
  },
  {
    image: "assets/img/north coat.png",
    title: "The north coat",
    price: 260,
    ratings: [1, 1, 1, 1, 1],
    reviews: 60,
  },
  {
    image: "assets/img/Gucci-Savoy-medium-duffle-bag.png",
    title: "Gucci duffle bag",
    price: 960,
    ratings: [1, 1, 1, 1, 1],
    reviews: 60,
  },
  {
    image: "assets/img/gammaxx-rgb.png",
    title: "RGB liquid CPU Cooler",
    price: 160,
    ratings: [1, 1, 1, 1, 1],
    reviews: 60,
  },
  {
    image: "assets/img/book shelf.png",
    title: "Small BookSelf",
    price: 360,
    ratings: [1, 1, 1, 1, 1],
    reviews: 60,
  },
  {
    image: "assets/img/Frame 604.png",
    title: "Breed Dry Dog Food",
    price: 100,
    ratings: [1, 1, 1, 1, 1],
    reviews: 60,
  },
  {
    image: "assets/img/camera.png",
    title: "CANON EOS DSLR Camera",
    price: 160,
    ratings: [1, 1, 1, 1, 1],
    reviews: 60,
  },
  {
    image: "assets/img/laptop.png",
    title: "ASUS FHD Gaming Laptop",
    price: 700,
    ratings: [1, 1, 1, 1, 1],
    reviews: 60,
  },
  {
    image: "assets/img/curology.png",
    title: "Curology Product Set",
    price: 500,
    ratings: [1, 1, 1, 1, 1],
    reviews: 65,
  },
  {
    image: "assets/img/Car Kids.png",
    title: "Kids Electric Car",
    price: 960,
    new: true,
    ratings: [1, 1, 1, 1, 1],
    reviews: 70,
  },
  {
    image: "assets/img/shoes.png",
    title: "Jr. Zoom Soccer Cleats",
    price: 1160,
    ratings: [1, 1, 1, 1, 1],
    reviews: 80,
  },
  {
    image: "assets/img/gamepad black.png",
    title: "GP11 Shooter USB Gamepad",
    price: 660,
    new: true,
    ratings: [1, 1, 1, 1, 1],
    reviews: 60,
  },
  {
    image: "assets/img/jacket.png",
    title: "Quilted Satin Jacket",
    price: 660,
    ratings: [1, 1, 1, 1, 0.5],
    reviews: 60,
  },
];
// Function to generate HTML for cards
// Function to generate HTML for cards
function generateCards(cards) {
  return cards
    .map((card) => {
      // Calculate average rating based on the ratings array
      const totalRatings = card.ratings.reduce(
        (sum, rating) => sum + rating,
        0
      );
      const averageRating = totalRatings / card.ratings.length;
      // Determine the number of full, half, and empty stars based on the average rating
      const fullStars = Math.floor(averageRating);
      const hasHalfStar = averageRating % 1 >= 0.5 ? 1 : 0;
      const emptyStars = 5 - fullStars - hasHalfStar;
      // Determine if the card is new and has a discount
      const isNew = card.new ? '<div class="new">New</div>' : "";
      const discountLabel = card.discount
        ? `<div class="discount">${card.discount}</div>`
        : "";
      const hasLabels = card.discount || card.new;
      const iconAlignment = hasLabels
        ? "justify-content-between"
        : "justify-content-end";
      // Generate star icons
      const starsHTML = `
        ${Array.from(
          { length: fullStars },
          () =>
            '<span class="rating-color"><i class="bi bi-star-fill"></i></span>'
        ).join("")}
        ${
          hasHalfStar
            ? '<span class="rating-color"><i class="bi bi-star-half"></i></span>'
            : ""
        }
        ${Array.from(
          { length: emptyStars },
          () => '<span class="rate-no-color"><i class="bi bi-star"></i></span>'
        ).join("")}
      `;
      // Create the card HTML and set a data attribute
      return `
        <div class="col" style="${
          !hasLabels ? "background-color: #f5f5f5;" : ""
        }" data-card-id="${card.title.replace(/\s+/g, "-").toLowerCase()}">
          <div class="card border-0">
            <div class="position-relative card-img-section d-flex rounded-3 align-items-center justify-content-center overflow-hidden">
              <div class="d-flex card-inner-img-section justify-content-center align-items-center">
                <img src="${card.image}" class="card-img-top" alt="${
        card.title
      }" />
              </div>
              <div class="position-absolute top-0 d-flex ${iconAlignment} card-icons">
                ${discountLabel}
                ${isNew}
                <div class="viewAndwhislist d-flex flex-column gap-2">
                  <div class="icon-circle">
                    <a href="#"><img src="assets/img/heart-icon.png" alt="Wishlist" /></a>
                  </div>
                  <div class="icon-circle">
                    <a href="#"><img src="assets/img/view-icon.png" alt="View" /></a>
                  </div>
                </div>
              </div>
              <div class="adToCart bottom-0 rounded-2" data-title="${card.title}" data-price="${card.price}">Add to cart</div>
            </div>
            <div class="card-body border-0 d-flex flex-column">
              <span class="card-title">${card.title}</span>
              <div>
                <span class="price">$${card.price}</span>
                ${
                  card.mrpPrice
                    ? `<span class="mrpPrice ms-1"><del>$${card.mrpPrice}</del></span>`
                    : ""
                }
              </div>
              <div class="rating">
                ${starsHTML}
                <span class="review-count">(${card.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

// Select all card containers
const cardContainers = document.querySelectorAll(".card-container");
// Generate and append cards to the corresponding containers
generateCard.forEach((card, index) => {
  const cardHTML = generateCards([card]); // Generate HTML for each card
  if (cardContainers[index]) {
    cardContainers[index].innerHTML += cardHTML; // Append to the corresponding container
  }
});

// Add event listeners for "Add to cart" buttons
document.querySelectorAll('.adToCart').forEach(button => {
  button.addEventListener('click', function() {
    const title = this.getAttribute('data-title');
    const price = parseFloat(this.getAttribute('data-price'));
    
    // Call the addToCart function with the title and price
    addToCart(title, price);
  });
});

// Function to show notifications
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
    `#subtotal-${row.getAttribute("data-title").replace(/\s+/g, "-").toLowerCase()}`
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
              <img src="assets/img/${title.replace(/\s+/g, "-").toLowerCase()}.png" alt="${title}" width="50">
              ${title}
          </td>
          <td>$${price}</td>
          <td>
              <input type="number" class="form-control w-50" value="${quantity}" min="1">
          </td>
          <td id="subtotal-${title.replace(/\s+/g, "-").toLowerCase()}">$${subtotal.toFixed(2)}</td>
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
    document.getElementById("cartTotal").textContent = `$${newTotal.toFixed(2)}`;
    alert("Coupon applied! 10% discount has been applied.");
  } else {
    alert("Invalid coupon code.");
  }
});

// Initial call to update cart total in case the cart is pre-filled
updateCartTotal();