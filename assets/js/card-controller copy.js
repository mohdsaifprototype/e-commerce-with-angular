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
function generateCards(cards) {
  return cards
    .map((card) => {
      // Calculate average rating based on the ratings array
      const totalRatings = card.ratings.reduce(
        (sum, rating) => sum + rating,
        0
      );
      const averageRating = totalRatings / card.ratings.length;
      // Debugging: log the average rating
      console.log(`Average rating for ${card.title}: ${averageRating}`);
      // Determine the number of full, half, and empty stars based on the average rating
      const fullStars = Math.floor(averageRating); // Full stars
      const hasHalfStar = averageRating % 1 >= 0.5 ? 1 : 0; // Half star if average is 0.5 or more
      const emptyStars = 5 - fullStars - hasHalfStar; // Remaining stars are empty
      // Determine if the card is new and has a discount
      const isNew = card.new ? '<div class="new">New</div>' : "";
      const discountLabel = card.discount
        ? `<div class="discount">${card.discount}</div>`
        : "";
      const hasLabels = card.discount || card.new;
      const iconAlignment = hasLabels
        ? "justify-content-between"
        : "justify-content-end"; // Adjust alignment based on labels
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
      return `
        <div class="col" style="${
          !hasLabels ? "background-color: #f5f5f5;" : ""
        }">
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
              <div class="adToCart bottom-0 rounded-2">Add to cart</div>
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
    .join(""); // Join all card HTML strings into one
}
// Select all card containers
const cardContainers = document.querySelectorAll(".card-container");
// Generate and append cards to the corresponding containers
generateCard.forEach((card, index) => {
  const cardHTML = generateCards([card]); // generate HTML for each card
  if (cardContainers[index]) {
    cardContainers[index].innerHTML += cardHTML; // append to the corresponding container
  }
});
