const topNav = document.getElementById("top-nav");
const hamburger = document.querySelector(".hamburger");
const hamburger2 = document.querySelector(".hamburger2");

if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
  let observer = new IntersectionObserver(entries => {
    if (entries[0].boundingClientRect.y < 85) {
      document.body.classList.add("header-not-at-top");
    } else {
      document.body.classList.remove("header-not-at-top");
    }
  });
  observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
}



// function mobileNav() {
//   if (topNav.style.height === "250px") {
//     topNav.style.height = "0";
//   } else {
//     topNav.style.height = "250px";
//   }
// };

// function observedMobileNav() {
//   if (topNav.style.height === "250px") {
//     topNav.style.height = "0";
//   } else {
//     topNav.style.height = "250px";
//   }
// }


// // function closeNav() {
// //   document.getElementById("top-nav").style.height = "0%";
// // }


// hamburger.addEventListener('click', mobileNav);
// hamburger2.addEventListener('click', observedMobileNav);

function emailSignup() {
  if (document.getElementById("name").validity.valueMissing || document.getElementById("email").validity.valueMissing) {
    alert("Name & valid email address are required!");
  } else {
    var nameInput = document.getElementById("name").value;
    var result = "Welcome to the DCD Coffee Club," + ' ' + nameInput + '!';
    document.getElementById("divResult").innerText = result;
  }
}

document.querySelector('#copyright-year').innerText = new Date().getFullYear();