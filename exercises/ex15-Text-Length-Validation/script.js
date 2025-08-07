// Select the input field and the message span by their IDs
let inputText = document.querySelector("#text");
let message = document.querySelector("#msg");

// Define the minimum required length for the input
let minLength = 6;

/* 
====================================
 Solution One: Inline Arrow Function
------------------------------------
This approach uses an inline arrow function directly inside
the event listener. It's simple and quick for small scripts,
but not as reusable because the logic is tied to this event only.
====================================
*/
// inputText.addEventListener("keyup", () => {
//   let inputTextValue = inputText.value;
//
//   if (inputTextValue.length < minLength) {
//     message.textContent = "Text must be at least 6 characters.";
//     message.style.color = "red";
//     inputText.style.border = "2px solid red";
//   } else {
//     message.textContent = "Valid input.";
//     message.style.color = "green";
//     inputText.style.border = "2px solid green";
//   }
// });

/* 
====================================
 Solution Two: Separate Named Function
------------------------------------
This approach defines a named function (checkInput) 
and passes it to the event listener.
It improves reusability — the same function can be
used for multiple events (e.g., 'keyup', 'blur', 'input').
This is the preferred method for maintainable code.
====================================
*/
function checkInput() {
  let inputTextValue = inputText.value;

  if (inputTextValue.length < minLength) {
    message.textContent = "Text must be at least 6 characters.";
    message.style.color = "red";
    inputText.style.border = "2px solid red";
  } else {
    message.textContent = "Valid input.";
    message.style.color = "green";
    inputText.style.border = "2px solid green";
  }
}

// Attach the named function to the keyup event
inputText.addEventListener("keyup", checkInput);
