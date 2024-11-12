function makeElement(
  myElem = "div",
  myClass,
  attribute = "",
  value = "",
  content = ""
) {
  let i = 0;
  let elem = document.createElement(myElem);
  if (content) {
    elem.innerHTML = content;
  }
  elem.className = myClass;
  if (attribute) {
    attribute.forEach((element) => {
      elem.setAttribute(element, value[i]);
      i++;
    });
  }
  return elem;
}

document.addEventListener("DOMContentLoaded", function () {});

let trustCard = document.querySelector(".trustCard");
let content3 = `     
        <div class="row row-cols-2 row-cols-md-3  ">
          <div class="col mb-5 mb-md-0 ">
           <div class="card bg-transparent d-flex justify-content-center align-items-center border-0 ">
            <div class="rounded-5  icon-delivery d-flex justify-content-center align-items-center ">
              <img src="assets/img/icon-delivery.png" alt="">
            </div>
            <div class="card-body text-center">
              <h5 class="card-title mt-4 fw-bold text-fs  ">FREE AND FAST DELIVERY</h5>
              <h6 class="card-subtitle mt-1 text-body-secondary  text-fs">Free delivery for all orders over $140</h6>
            </div>
           </div>
          </div>
          <div class="col  mb-5 mb-md-0">
           <div class="card bg-transparent d-flex justify-content-center align-items-center border-0 ">
            <div class="rounded-5  icon-delivery d-flex justify-content-center align-items-center ">
              <img  src="assets/img/Icon-Customer service.png" alt="">
            </div>
            <div class="card-body text-center">
              <h5 class="card-title mt-4 fw-bold  text-fs ">24/7 CUSTOMER SERVICE</h5>
              <h6 class="card-subtitle mt-1 text-body-secondary text-fs">Friendly 24/7 customer support</h6>
            </div>
           </div>
          </div>
          <div class="col ">
           <div class="card bg-transparent d-flex justify-content-center align-items-center border-0 ">
            <div class="rounded-5  icon-delivery d-flex justify-content-center align-items-center ">
              <img src="assets/img/Icon-secure.png" alt="">
            </div>
            <div class="card-body text-center">
              <h5 class="card-title mt-4 fw-bold text-fs ">MONEY BACK GUARANTEE</h5>
              <h6 class="card-subtitle mt-1 text-body-secondary text-fs">We reurn money within 30 days</h6>
            </div>
           </div>
          </div>
         
        
        </div>
      `;
mytrustCard = makeElement(
  "div",
  "container-xxl threeCards cardValue",
  "",
  "",
  content3
);
trustCard.append(mytrustCard);


let endingDAte = "15 November 2024 7:00 PM";
let timerValue = document.querySelectorAll(".timerValue");
function Timer() {
  let ending = new Date(endingDAte);
  let now = new Date();
  let difference = (ending - now) / 1000;
  timerValue[0].innerHTML = Math.floor(difference / 3600 / 24);
  timerValue[1].innerHTML = Math.floor(difference / 3600) % 24;
  timerValue[2].innerHTML = Math.floor(difference / 60) % 60;
  timerValue[3].innerHTML = Math.floor(difference) % 60;
}
Timer();
setInterval(() => {
  Timer();
}, 1000);


