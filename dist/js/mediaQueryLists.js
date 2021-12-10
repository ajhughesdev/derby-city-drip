const heroImg = document.querySelector(".coffee-cup");
const heroBtn = document.querySelector(".hero-button");

const mobileMql = window.matchMedia("(max-width: 767px)");
const tabletMql = window.matchMedia("(min-width: 768px) and (max-width: 1919px");
const desktopMql = window.matchMedia("(min-width: 1920px)");

deviceCheck();

function deviceCheck() {
  if (mobileMql.matches) {
    heroBtn.innerHTML = "order online"
  } else if (tabletMql.matches) {
    heroBtn.innerHTML = "view menu"
  } else if (desktopMql.matches) {
    heroBtn.innerText = "view menu"
  }
};

mobileMql.addEventListener('change', (deviceCheck));
tabletMql.addEventListener('change', (deviceCheck));
desktopMql.addEventListener('change', (deviceCheck));