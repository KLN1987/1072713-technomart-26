var basket = document.querySelector(".basket");
var basket_popup = document.querySelector(".modal-added-cart");
var basket_close = basket_popup.querySelector(".modal-close");
var basket_form = basket_popup.querySelector("form");

basket.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket_popup.classList.add("modal-show");
});

basket_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket_popup.classList.remove("modal-show");
});

basket_form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (basket_popup.classList.contains("modal-show")) {
      basket_popup.classList.remove("modal-show");
    }
  }
});