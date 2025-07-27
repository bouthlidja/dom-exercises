// Select the image element and the "Next" button
const image = document.querySelector(".main-image");
const btnNext = document.querySelector(".next");

// Array of image paths (You can add or remove images here)
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
];

// Index to keep track of the currently displayed image
let currentIndex = 0;

// Set the initial image on page load
image.src = images[currentIndex];

// Solution One: (Circular navigation - Uncomment if needed)
// btnNext.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % images.length; // Loops back to 0
//   image.src = images[currentIndex];
// });

//  Solution Two: Stop at the last image and disable the button
btnNext.addEventListener("click", () => {
  // Increase the index
  currentIndex++;
  // Update the image source
  image.src = images[currentIndex];
  // If the last image is reached, disable the button
  if (currentIndex === images.length - 1) {
    btnNext.disabled = true; // Prevent further clicks
    btnNext.style.opacity = 0.5; // Optional visual feedback
    btnNext.style.cursor = "not-allowed";
  }
});
