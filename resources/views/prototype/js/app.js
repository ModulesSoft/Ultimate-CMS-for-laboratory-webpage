    w3_open = function(){
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = "none";
    }

    w3_close = function () {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
    }
    // slideshow
    var slideIndex = 1;
    showDivs(slideIndex);

    plusDivs = function (n) {
        showDivs((slideIndex += n));
    }
    showDivs = function (n) {
        var i;
        var x = document.getElementsByClassName("slideshow__image");
        if (n > x.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = x.length;
        }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex - 1].style.display = "block";
    }

    ScrollOut({
        /* options */
      });




      var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);