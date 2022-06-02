var menuButton = document.getElementById("btn");
var menu = document.getElementById("menu");
var logoBox = document.getElementById("logoBox");
var navigation = document.getElementById("navigation");
var body = document.querySelector("body");

function menuFixed() {
  if (scrollY > 0) {
    navigation.classList.add("fixed");
  } else {
    navigation.classList.remove("fixed");
  }
}

function menuOpen() {
  menuButton.classList.toggle("opened");
  menu.classList.toggle("active");
  logoBox.classList.toggle("active");
  body.classList.toggle("active");
}
