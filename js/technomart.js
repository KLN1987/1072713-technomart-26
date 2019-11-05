var basket = document.querySelectorAll(".basket");
var basket_popup = document.querySelector(".modal-added-cart");
var basket_close = basket_popup.querySelector(".modal-close");
var basket_form = basket_popup.querySelector("form");

for (var i=0; i<basket.length; i++) { 
  basket[i].addEventListener('click', function(evt) {
  evt.preventDefault();
  basket_popup.classList.add("modal-show");
});
}

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

var lost = document.querySelector(".write-us");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form")
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

lost.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

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

  function openSection(evt, nameSection) {
    var i, service_item, tablinks;
    service_item = document.getElementsByClassName("service_item");
    for (i = 0; i < service_item.length; i++) {
      service_item[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(nameSection).style.display = "block";
    evt.currentTarget.className += " active";
  }

  var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);
}

function currentSide(n){
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("slider-controls-item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active-btn", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-btn";
}