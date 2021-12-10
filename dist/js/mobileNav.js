const topNav = document.getElementById("top-nav");
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;

function mobileNav() {
  if (topNav.style.display === "none") {
    topNav.style.display = "grid";
  } else {
    topNav.style.display = "none";
  }
};

function closeNav() {
  topNav.style.display = "none";
}

hamburger.addEventListener('click', mobileNav);



function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
};

scrollToTopBtn.addEventListener("click", scrollToTop);

let target = document.querySelector(".target");

function callback(entries, observer) {
  entries.forEach(entry => {
    if (entries[0].boundingClientRect.y < 250)  {
      scrollToTopBtn.classList.add("showBtn")
    } else {
      scrollToTopBtn.classList.remove('showBtn')
    }
  });
}

let observer = new IntersectionObserver(callback);

observer.observe(scrollToTopBtnMarker);