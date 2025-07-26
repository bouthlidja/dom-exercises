let body = document.body;
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");

let buttons = document.querySelectorAll(".color button"); // All buttons inside the element with class 'color'

// -----------------------------
// Solution One (Direct Method)
// Change background color directly when each button is clicked, without any helper function
red.onclick = function () {
  body.style.backgroundColor = "red";
};
green.onclick = function () {
  body.style.backgroundColor = "green";
};
blue.onclick = function () {
  body.style.backgroundColor = "blue";
};

// -----------------------------
// Solution Two (Using a Function)
// Use a reusable function to change the background color of any element
function ChangeBgColor(ele, color) {
  ele.style.backgroundColor = color;
}

red.onclick = () => {
  ChangeBgColor(body, "red");
};
green.onclick = () => {
  ChangeBgColor(body, "green");
};
blue.onclick = () => {
  ChangeBgColor(body, "blue");
};

// -----------------------------
// Solution Three (Dynamic Looping)
// Loop through all buttons and automatically get the color from each button's class name
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let color = btn.className; // Get the class name, assuming it matches the color
    body.style.backgroundColor = color;
  });
});
