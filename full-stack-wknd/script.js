console.log("Hello World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".factform");

// Adding a function to open the hidden class - share a fact
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
// some variables for terniary operator
const argentina = 3;
const france = 2;

// function for the template literal
function getAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}

const text = "Helsinki is the capital of Finland!";
// template literal example. ${} lets the use of value/variables inside strings
const str = `The current fact is "${text}". It is ${getAge(1917)} years old. 
This is probably ${argentina > france ? "true" : "false"}`;
console.log(str);
