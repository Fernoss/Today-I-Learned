/*
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
*/

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".factform");
const factsList = document.querySelector(".facts-list");

// DOM manipulation - Hides the fact posts.
factsList.innerHTML = "";

// *** LOAD data from SUPABASE ***
loadFacts();

async function loadFacts() {
  const res = await fetch(
    URL here,
    {
      headers: {
        apikey:"";
        authorization:"";
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

// we can call a function before created
// createFactsList(initialFacts);

// *** Create DOM elements: Render facts in list (Vanil la JS) ***
function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Joonas</li>");
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
      ${fact.text}
          <a
            class="source"
            href="${fact.source}"
            target="_blank"
          >(Source)</a>
      </p>
      <span class="tag" style="background-color: #3b82f6"
          >${fact.category}</span>
    </li>`
  );
  console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// Creating DOM elements

// ----------- Basic JS practice ------------
// some variables for terniary operator
/*
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

// basic arrow function. This arrow function is exactly the same than getAge()
const getAge2 = (year) => new Date().getFullYear() - year;
console.log(getAge2(2015));

// arrow function with condition, using terniary operator
const getAge3 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;
console.log(getAge3(2030));

// Basic of JS array
const fact = ["Helsinki is the capital of Finalnd", 1917, true];

console.log(fact);
console.log(fact[1]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

// creating three variables using array. Structoring
const [text, createdIn] = fact;
console.log(text);

// creating a new array while using old array as base = spreading
const newFact = [...fact, "society"];
console.log(newFact);

// Basics of Object
const factObj = {
  text: "Helsinki is the capital of Finland",
  category: "society",
  createdIn: 1917,
  isCorrect: true,
  // method
  createSummary: function () {
    return `The fact "${
      this.text
    }" is from the category ${this.category.toUpperCase()}`;
  },
};
console.log(factObj.text);

// creating variable and calling from obj the value
const { category, isCorrect } = factObj;
console.log(category);

console.log(factObj.createSummary());


//  *** Basics of looping, forEach ***
[2, 4, 6, 8].forEach(function (i) {
  console.log(i);
});

// Basics of looping, map method
const times10 = [2, 4, 6, 8].map(function (i) {
  return i * 10;
});

// map method with arrow function instead
const timesTen = [2, 4, 6, 8].map((i) => i * 10);
console.log(times10);


const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Looping through array, using arrow function
const allCategories = CATEGORIES.map((i) => i.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// function to calculate age
const getAge3 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;

// Calculating each posts age
const factAges = initialFacts.map((i) => getAge3(i.createdIn));
console.log(factAges);
// we can use .join("") to add for the console a string with the arrays
// prints 1/3/7
console.log(factAges.join("/"));
*/
// *** DOM - Document Object Model ***
// DOM manipulation - DOM objects contain mehtods and properties to manipulate them:
// change text and HTML attributes, insert new HTML elements etc.
