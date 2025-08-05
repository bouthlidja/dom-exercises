// Select the text paragraph and buttons by their IDs
let text = document.querySelector("#text");
let bold = document.querySelector("#bold");
let italic = document.querySelector("#italic");
let reset = document.querySelector("#reset");

/* 
==================================
Solution One: Direct Style Editing
==================================
*/

// Apply bold style directly using inline CSS
bold.addEventListener("click", () => {
  text.style.fontWeight = "bold";
});

// Apply italic style directly using inline CSS
italic.addEventListener("click", () => {
  text.style.fontStyle = "italic";
});

// Reset text styles to default (normal)
reset.addEventListener("click", () => {
  text.style.fontStyle = "normal";
  text.style.fontWeight = "normal";
});

/* 
==================================
Solution Two: Class Toggling Method
==================================
*/

// Toggle bold class and change button text accordingly
bold.addEventListener("click", () => {
  text.classList.toggle("add-bold");

  // Change button label based on current state
  if (bold.textContent === "Bold") {
    bold.textContent = "Normal";
  } else {
    bold.textContent = "Bold";
  }
});

// Toggle italic class and change button text accordingly
italic.addEventListener("click", () => {
  text.classList.toggle("add-italic");

  // Change button label based on current state
  if (italic.textContent === "Italic") {
    italic.textContent = "Normal";
  } else {
    italic.textContent = "Italic";
  }
});

// Remove all applied classes and reset button labels
reset.addEventListener("click", () => {
  text.classList.remove("add-bold", "add-italic");
  bold.textContent = "Bold";
  italic.textContent = "Italic";
});
