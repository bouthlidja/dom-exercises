let counter = document.querySelector("#counter");
let btnIncrement = document.querySelector("#increment");
let btnReset = document.querySelector("#reset");
let count = 0;

// ==========================
// Solution One (Simple Logic)
// ==========================

/*
btnIncrement.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

btnReset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});
*/

// ==========================
// Solution Two (With Function)
// ==========================

// Updates the counter display and internal count value
function updateCounter(value) {
  count = value;
  counter.textContent = count;
}

// Increment count on click
btnIncrement.addEventListener("click", () => updateCounter(count + 1));

// Reset count on click
btnReset.addEventListener("click", () => updateCounter(0));
