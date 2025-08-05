// Select all elements with the class "color-item"
let items = document.querySelectorAll(".color-item");

// Select the button with the ID "changeColors"
let btnChangeColors = document.querySelector("#changeColors");

// Add a click event listener to the button
btnChangeColors.addEventListener("click", () => {
  // Loop through each item and change its background and text color
  items.forEach((ele) => {
    ele.style.backgroundColor = "lightblue"; // Set background color
    ele.style.color = "green"; // Set text color
  });
});
