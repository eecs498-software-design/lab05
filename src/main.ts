// SEGMENT 2: Accessing DOM elements

const counterDisplay = document.getElementById("counter-display")!;
const incBtn = document.getElementById("inc-btn")!;
const resetBtn = document.getElementById("reset-btn")!;
const textInput = document.getElementById("text-input") as HTMLInputElement;
const messages = document.getElementById("messages")!;

let count = 0;

// SEGMENT 2: Rendering state to DOM
function render() {
  counterDisplay.textContent = `Count: ${count}`;

  counterDisplay.classList.toggle("positive", count > 0);
  counterDisplay.classList.toggle("zero", count === 0);
}

// SEGMENT 2: Event listeners in JS (not HTML)
incBtn.addEventListener("click", () => {
  count++;
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

// SEGMENT 2: Input event
textInput.addEventListener("input", () => {
  const p = document.createElement("p");
  p.textContent = `You typed: ${textInput.value}`;
  messages.appendChild(p);
});

// SEGMENT 3: Styling via DOM
counterDisplay.addEventListener("mouseover", () => {
  counterDisplay.classList.add("highlight");
});

counterDisplay.addEventListener("mouseout", () => {
  counterDisplay.classList.remove("highlight");
});

// Initial render
render();
