let counter = document.querySelector("#counter");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");

let count = 0;

increment.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
  console.log("incrementCounter");
});

decrement.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.innerHTML = count;
    console.log("decrementCounter");
  }
});
