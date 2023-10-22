/* .js files add interaction to your website */
//Click Me Button
var inputBtn = document.getElementById("input-btn");
var resourceList = [
  "If women in the United States received equal pay with comparable men, poverty for working women would be reduced by half and the U.S. economy would have added $482 billion to its economy.",
  "Since 2010, the wage gap has hovered between 18% and 19% between the salaries of men and women in similar positions, showing little progress across the nation for pay equity.",
  "According to the Bureau of Labor Statistics, there are only five job roles that report a wage gap favoring women: compliance officers, graphic designers, clinical laboratory technologists, pharmacists, and insurance claims and policy processing clerks."
];


var resource = document.getElementById("resource");
var myButton = document.getElementById("input-btn");
var count = 0;

myButton.addEventListener("click", displayResource);

function displayResource(){
  resource.innerHTML = resourceList[count];
  count++;
  if (count == resourceList.length){
    count = 0;
  }
}


//Carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
