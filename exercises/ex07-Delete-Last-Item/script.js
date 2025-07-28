// Select the delete button using its class "delete"
let btnDelete = document.querySelector(".delete");

// Select the unordered list element that contains the list items
let myList = document.querySelector("#myList");

// Select the message element to display feedback when the list is empty
let msg = document.querySelector("#msg");

// Solution One: Using an array to remove the last <li> item
/*
btnDelete.addEventListener("click", () => {
  // Select all <li> elements inside the list
  let myList = document.querySelectorAll("#myList li");

  // Convert the NodeList to an Array
  let arr = Array.from(myList);

  // Remove the last item from the array (and from the DOM)
  // ⚠️ This does not check if the array is empty, which may cause an error
  arr[arr.length - 1].remove();
});
*/
// Solution Two (Recommended): Using direct DOM access to remove the last item
btnDelete.addEventListener("click", () => {
  // Check if the list has at least one child element
  if (myList.lastElementChild !== null) {
    // Remove the last <li> element directly
    myList.lastElementChild.remove();
  } else {
    // If no items are left, show a message to the user
    msg.textContent = "No items left in the list.";
  }
});
