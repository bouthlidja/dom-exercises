// Select the button using its ID
const changeColorBtn = document.querySelector("#changeColorBtn");

// Reference the <body> element to change its background
const body = document.body;

// Array of beautiful background colors
const bgColors = [
  "#FF6B6B",
  "#6BCB77",
  "#4D96FF",
  "#FFD93D",
  "#6A4C93",
  "#FF9F1C",
  "#38B6FF",
  "#E36414",
  "#9D4EDD",
  "#00BBF9",
];

// Add a click event listener to the button
changeColorBtn.addEventListener("click", () => {
  // Generate a random index within the range of the array
  let randomIndex = Math.floor(Math.random() * bgColors.length);

  // Change the background color of the body to a random color
  body.style.backgroundColor = bgColors[randomIndex];
});
