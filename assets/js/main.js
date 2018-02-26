//Slideshow
var slidesArray = document.getElementsByClassName("mySlides");
//console.log('slide len ', slidesArray.length);
var slideIndex = 0;
if (slidesArray.length > 0) {
    carousel();
} else {
    console.log("buttons should work");
}
function carousel() {
    console.log('car called ');
    var i;
    var x = document.getElementsByClassName("mySlides");
    console.log("slide len ", x.length);
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }

    x[slideIndex - 1].style.display = "block";

    setTimeout(carousel, 4000);
}