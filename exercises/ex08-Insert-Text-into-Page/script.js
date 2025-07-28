// Select the "Add" button
let btnAdd = document.querySelector("#addText");

// Select the element where the text will be displayed
let displayText = document.querySelector("#displayText");

// Add a click event listener to the button
btnAdd.addEventListener("click", () => {
  // Get the value from the input field and remove whitespace
  let text = document.querySelector("#inputText").value.trim();

  // Create a new paragraph element
  let ele = document.createElement("p");

  // Set the paragraph's text to the input value
  ele.textContent = text;

  // Append the paragraph to the display area
  displayText.append(ele);

  // Clear the input field after adding the text
  document.querySelector("#inputText").value = "";
});
