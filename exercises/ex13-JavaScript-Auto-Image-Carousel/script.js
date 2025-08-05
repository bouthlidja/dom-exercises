// Get the image element with id "slider" from the DOM
let image = document.querySelector("#slider");

// Array containing the paths to all slider images
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
];

// Variable to keep track of the current image index
let currentIndex = 0;

// Set an interval to change the image every second (1000ms)
setInterval(() => {
  // Set the image source to the current image in the array
  image.src = images[currentIndex];

  // Increment the index to move to the next image
  currentIndex++;

  // Reset index to 0 when reaching the last image
  // Note: There's a small bug here - it should be 'images.length' instead of 'images.length - 1'
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  }
}, 1000);
