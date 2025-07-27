// Select the unordered list element by its ID
let myList = document.querySelector("#myList");

// Select the button element by its class
let btnAdd = document.querySelector(".add");

// Counter to keep track of item numbers
let numberItem = 1;

// Add a click event listener to the button
btnAdd.addEventListener("click", function () {
  // Create a new <li> element
  let li = document.createElement("li");

  // Create a text node with the current item number
  let liText = document.createTextNode(`Item ${numberItem}`);

  // Append the text to the <li> element
  li.appendChild(liText);

  // Append the <li> element to the list
  myList.appendChild(li);

  // Increment the item number for the next addition
  numberItem++;
});
