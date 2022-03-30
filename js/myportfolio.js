function openForm() {                                         //This function opens the contact form
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {                                        //This function closes the contact form
    document.getElementById("myForm").style.display = "none"
}

var slideIndex = 1;             //this displays the first image in the slideshow when the page loads
showSlides(slideIndex);

function plusSlides(n) {             //This function changes the slide when the left or right arrows are clicked
    showSlides(slideIndex += n);
}

function currentSlide(n) {          //This function changes the slide when the dots are clicked
    showSlides(slideIndex = n);
}

function showSlides(n) {                                          //This function makes the slideshow go
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

document.addEventListener("click", function (event) {               //This is how the user can close the contact form by clicking off of it
    if (event.target.matches(".cancel") ||
        !event.target.closest(".form-popup") &&
        !event.target.closest(".popupbtn") &&
        !event.target.closest(".contact")) {
            closeForm()
        }
}, false)