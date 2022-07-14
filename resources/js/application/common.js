// slideshow
var slideIndex = 1;
// showDivs(slideIndex);

// const w3_open = function () {
//     document.getElementById("main").style.marginLeft = "25%";
//     document.getElementById("mySidebar").style.width = "25%";
//     document.getElementById("mySidebar").style.display = "block";
//     document.getElementById("openNav").style.display = "none";
// };

// const w3_close = function () {
//     document.getElementById("main").style.marginLeft = "0%";
//     document.getElementById("mySidebar").style.display = "none";
//     document.getElementById("openNav").style.display = "inline-block";
// };

const plusDivs = function (n) {
    showDivs((slideIndex += n));
};
const showDivs = function (n) {
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
};

var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            if (!items[i].classList.contains("in-view")) {
                items[i].classList.add("in-view");
            }
        } else if (items[i].classList.contains("in-view")) {
            items[i].classList.remove("in-view");
        }
    }
}

// window.addEventListener("load", callbackFunc);
// window.addEventListener("scroll", callbackFunc);

// ScrollOut({
//     /* options */
// });

export const getThumbUri = (size, uri) => {
    if (uri) {
        let thumbDir = "";
        switch (size) {
            case "150x150":
                thumbDir = "thumb150x150";
                break;
            case "300x300":
                thumbDir = "thumb300x300";
                break;
            default:
                return console.error(
                    "Requested thumbnail image size is not valid"
                );
        }
        //Ensure that the provided uri begins with /
        uri = getImageUri(uri);
        //Split to array
        let splited = uri.split("/");
        //Add the thumbnail path before the last element
        splited.splice(splited.length - 1, 0, thumbDir);
        //Rejoin the array elements to string with /
        return splited.join("/");
    } else {
        return;
    }
};
export const getImageUri = (uri) => {
    return uri.startsWith("/") ? uri : "/" + uri;
};
