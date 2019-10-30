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