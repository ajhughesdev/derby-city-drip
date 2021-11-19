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
