// Select the paragraph element with the ID "text"
let text = document.querySelector("#text");

// Select the button element with the ID "changeFontSize"
let btn = document.querySelector("#changeFontSize");

// Boolean flag to track the current font size state
let isLarge = false;

// Add a click event listener to the button
btn.addEventListener("click", () => {
  // If the text is currently large, make it smaller
  if (isLarge) {
    text.style.fontSize = 16 + "px";
  } else {
    // Otherwise, make the text larger
    text.style.fontSize = 24 + "px";
  }

  // Toggle the state: true becomes false, and false becomes true
  isLarge = !isLarge;
});
