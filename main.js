let slideIndex = 1;
showSlides(slideIndex);

// Next/previous control
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  let slides = document.querySelectorAll('.slide')
  if (n > slides.length) {
    slideIndex = 1;
  };
  if (n < 1) {
    slideIndex = slides.length;
  };
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[slideIndex - 1].style.display = "block";

}