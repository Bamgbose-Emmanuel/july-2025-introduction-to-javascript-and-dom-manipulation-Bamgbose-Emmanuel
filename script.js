// =======================
// Part 1: Mastering JavaScript Basics
// =======================

// Variable declarations & conditionals
let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
  console.log(`${userName}, you are an adult!`);
} else {
  console.log(`${userName}, you are still young!`);
}

// =======================
// Part 2: JavaScript Functions
// =======================

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: Format greeting
function greetUser(name) {
  return `Welcome, ${name}! Glad to see you here.`;
}

// Use the functions
console.log("Total: $" + calculateTotal(20, 3));
console.log(greetUser(userName));

// =======================
// Part 3: JavaScript Loops
// =======================

// Loop 1: Countdown
function startCountdown() {
  let count = 5;
  while (count > 0) {
    console.log("Countdown: " + count);
    count--;
  }
  console.log("Blast off! 🚀");
}

// Loop 2: List items using forEach
let fruits = ["Apple", "Banana", "Cherry", "Date"];
fruits.forEach(fruit => console.log("Fruit: " + fruit));

// =======================
// Part 4: DOM Manipulation
// =======================

// DOM Interaction 1: Change text when button is clicked
document.getElementById("greet-btn").addEventListener("click", () => {
  document.getElementById("welcome-text").textContent = greetUser(userName);
});

// DOM Interaction 2: Countdown display on page
document.getElementById("count-btn").addEventListener("click", () => {
  let count = 5;
  let interval = setInterval(() => {
    document.getElementById("welcome-text").textContent = "Countdown: " + count;
    count--;
    if (count < 0) {
      clearInterval(interval);
      document.getElementById("welcome-text").textContent = "Blast off! 🚀";
    }
  }, 1000);
});

// DOM Interaction 3: Toggle text on/off
document.getElementById("toggle-btn").addEventListener("click", () => {
  let textEl = document.getElementById("welcome-text");
  textEl.style.display = (textEl.style.display === "none") ? "block" : "none";
});

// Bonus: Populate list dynamically with fruits
let listContainer = document.getElementById("list-container");
fruits.forEach(fruit => {
  let li = document.createElement("li");
  li.textContent = fruit;
  listContainer.appendChild(li);
});
