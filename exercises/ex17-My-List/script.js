// Get references to input field, add button, and item list container
let itemInput = document.querySelector("#item-input");
let addBtn = document.querySelector("#add-btn");
let itemList = document.querySelector("#item-list");

// Add click event listener to the "Add" button
addBtn.addEventListener("click", addItem);

// Function to add a new item to the list
function addItem() {
  // Check if the input is empty or contains only spaces
  if (itemInput.value.trim() === "") {
    alert("Please enter an item"); // Show alert if input is empty
    return; // Stop function execution
  }

  // Create a new list item (li) element
  let eleLi = document.createElement("li");

  // Create a text node containing the user's input
  let title = document.createTextNode(itemInput.value);

  // Create a "Delete" button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete"; // Set button text
  delBtn.setAttribute("class", "delete-btn"); // Add CSS class to button

  // Append the text and delete button to the list item
  eleLi.append(title);
  eleLi.append(delBtn);

  // Add the list item to the list container
  itemList.append(eleLi);

  // Clear the input field
  itemInput.value = "";

  // Add event listener to the delete button to remove the item
  delBtn.addEventListener("click", () => {
    eleLi.remove();
  });
}
