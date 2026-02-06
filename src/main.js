const counterDisplay = document.getElementById("counter-display");
const incBtn = document.getElementById("inc-btn");
const resetBtn = document.getElementById("reset-btn");
const textInput = document.getElementById("text-input");
const messages = document.getElementById("messages");

let count = 0;

// Exercise 6:
// TODO: Make the counter display color change to red when count >= 10
function render() {
  counterDisplay.textContent = `Count: ${count}`;

  counterDisplay.classList.toggle("positive", count > 0);
  counterDisplay.classList.toggle("zero", count === 0);
}

incBtn.addEventListener("click", () => {
  count++;
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

textInput.addEventListener("input", () => {
  const p = document.createElement("p");
  p.textContent = `You typed: ${textInput.value}`;
  messages.appendChild(p);
});

// Exercise 4:
// TODO: Add an event listener that toggles the page title between "HTML and the DOM" and "Lab 05: HTML and the DOM"

counterDisplay.addEventListener("mouseover", () => {
  counterDisplay.classList.add("highlight");
});

counterDisplay.addEventListener("mouseout", () => {
  counterDisplay.classList.remove("highlight");
});

// Initial render
render();
