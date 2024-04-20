const deBtn = document.querySelector('button[data-action="decrement"]');
const inBtn = document.querySelector('button[data-action="increment"]');
const spanBtn = document.querySelector("#value");
let counterValue = 0;

deBtn.addEventListener("click", () => {
  counterValue = counterValue - 1;
  spanBtn.textContent = counterValue;
});

inBtn.addEventListener("click", () => {
  counterValue = counterValue + 1;
  spanBtn.textContent = counterValue;
});
