function include(file) {

  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('body').item(0).appendChild(script);
}

include('js/mediaQueryLists.js');
include('js/mobileNav.js');




// function emailSignup() {
//   if (document.getElementById("name").validity.valueMissing || document.getElementById("email").validity.valueMissing) {
//     alert("Name & valid email address are required!");
//   } else {
//     var nameInput = document.getElementById("name").value;
//     var result = "Welcome to the DCD Coffee Club," + ' ' + nameInput + '!';
//     document.getElementById("divResult").innerText = result;
//   }
// }

// document.querySelector('#copyright-year').innerText = new Date().getFullYear();