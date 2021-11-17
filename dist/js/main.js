function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
};

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth >= 767) {
  var y = document.getElementById("hero-button");
  y.innerText = "view menu";
  y.style.marginTop = "2rem";
  y.style.paddingTop = "1rem";
  y.style.paddingBottom = "1rem";
  y.style.paddingLeft = "3.5rem";
  y.style.paddingRight = "3.5rem";

};

document.querySelector('#copyright-year').innerText = new Date().getFullYear();