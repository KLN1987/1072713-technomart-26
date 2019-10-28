var basket = document.querySelector(".basket");
var popup = document.querySelector(".modal-added-cart");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");

basket.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});