let form = document.querySelector('.forma');
    form.onsubmit = function (e) {
    // return false;
    var popup = document.getElementById("myPopup-thnk"),
    popupform = document.getElementById("myPopup"); 
    e.preventDefault();
    popupform.classList.toggle("show");
    popup.classList.toggle("show");
    }