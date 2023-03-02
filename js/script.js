function myFunctionFirstShowCookie() {
    let cookie = document.querySelector('.cookie-alert');
    cookie.classList.add('show');
}

setTimeout(myFunctionFirstShowCookie, 5000);

function myFunctionShowCookie() {
    let cookie = document.querySelector('.cookie-alert');
    cookie.classList.remove('show');
}

function myFunctionShowThnk1() {
    var popup = document.getElementById("myPopup-thnk");
    popup.classList.toggle("show");
  }


function myFunctionShow() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }