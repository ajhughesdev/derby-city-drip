var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth <= 767) {
  var x = document.getElementById("top-nav");
  var y = document.getElementById("mobile-nav-push-down");

  function openNav() {
    x.style.height = "250px";
    y.style.paddingTop = "250px";
  };

  function closeNav() {
    x.style.height = "0";
    y.style.paddingTop = "0";
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
