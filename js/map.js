var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
  
mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("map-show");
  });

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("map-show");
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("map-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("map-show");
      }
    }
  });