// Get reference to the paragraph element that will be updated
let textElement = document.querySelector("#text");

// Get reference to the button element
let btn = document.querySelector("#changeBtn");

/* 
  Solution One: Using the onclick property
  Simple and straightforward, but limited — it allows only one event handler.
  Assigning a new handler will overwrite any existing one.
*/
btn.onclick = function () {
  textElement.textContent = "Text changed by javascript ";
};

/* 
  Solution Two: Using addEventListener with an anonymous function
  Preferred in modern development because it allows multiple event listeners
  to be added to the same element without conflicts.
*/
btn.addEventListener("click", function () {
  textElement.textContent = "Text changed by JavaScript!";
});

/* 
  Solution Three: Using addEventListener with a named function
  This approach is clean, reusable, and promotes better organization —
  especially useful in larger projects where logic is reused.
*/

function changeText() {
  textElement.textContent = "Text changed!";
}
btn.addEventListener("click", changeText);
