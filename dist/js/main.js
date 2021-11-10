var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth <= 767) {
  function openNav() {
    document.getElementById("top-nav").style.height = "250px";
    document.getElementById("mobile-nav-push-down").style.paddingTop = "250px";
  };

  function closeNav() {
    document.getElementById("top-nav").style.height = "0";
    document.getElementById("mobile-nav-push-down").style.paddingTop = "0";
  };
};

document.querySelector('#copyright-year').innerText = new Date().getFullYear();