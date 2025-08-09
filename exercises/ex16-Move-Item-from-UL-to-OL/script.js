

const ulList = document.querySelector("#ul-list");
const olList = document.querySelector("#ol-list");
const resetBtn = document.querySelector("#reset-btn");


const defaultUL = ulList.innerHTML;
const defaultOL = olList.innerHTML;

// Event Delegation: listen on the <ul>, not on each <li>
ulList.addEventListener("click", (event) => {
  // Check if the clicked element is an <li>
  if (event.target.tagName === "LI") {
    olList.append(event.target); // Move the clicked <li> to <ol>
  }
});
resetBtn.addEventListener("click", () => {
  ulList.innerHTML = defaultUL;
  olList.innerHTML = defaultOL;
});
