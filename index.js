// Get references to the elements
var prevButton = document.querySelector(".bottom-btn1"); // Targeting the buttons
var nextButton = document.querySelector(".bottom-btn2");
var slides = document.querySelectorAll(".card"); // Targeting the projects container
var slideContainer = document.querySelector(".card-container");
var index = 0;
function showSlide(index) {
for (var i = 0; i < slides.length; i++) {
slides[i].style.opacity = '0.3';
slides[i].classList.remove('active');
}
slides[index].style.opacity = '2';
slides[index].classList.add('active');
if (slideContainer) {
slideContainer.style.transform = "translateX(-".concat(index * 10, "%)");
}
}
prevButton === null || prevButton === void 0 ? void 0 : prevButton.addEventListener('click', function () {
index--;
if (index < 0) {
index = slides.length - 1;
}
showSlide(index);
});
nextButton === null || nextButton === void 0 ? void 0 : nextButton.addEventListener('click', function () {
index++;
if (index >= slides.length) {
index = 0;
}
showSlide(index);
});
showSlide(index);
