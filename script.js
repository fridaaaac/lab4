// Variables to store the user's choices (state)
let temp = "";   // "hot" or "cold"
let taste = "";  // "spicy", "mild" or "sweet"

// Step 1: user clicks "Hot" or "Cold"
function selectTemp(choice) {
  temp = choice;
  document.getElementById("status").textContent = "You chose: " + temp;
  document.getElementById("step1").classList.add("hidden");    // hide question 1
  document.getElementById("step2").classList.remove("hidden"); // show question 2
}

// Step 2: user clicks a flavor, then decide what to eat
function selectTaste(choice) {
  taste = choice;
  document.getElementById("status").textContent = "You chose: " + temp + " + " + taste;

  let food = ""; // will hold the recommendation

  // Conditional statements: pick a result based on the two variables
  if (temp === "hot" && taste === "spicy") {
    food = "Spicy hot pot";
  } else if (temp === "hot" && taste === "mild") {
    food = "Hot noodle soup";
  } else if (temp === "hot" && taste === "sweet") {
    food = "Pancakes with hot chocolate";
  } else if (temp === "cold" && taste === "spicy") {
    food = "Cold noodles with chili oil";
  } else if (temp === "cold" && taste === "mild") {
    food = "Sushi";
  } else if (temp === "cold" && taste === "sweet") {
    food = "Ice cream sundae";
  } else {
    food = "Just eat anything"; // fallback if nothing above matches
  }

  // Show the result
  document.getElementById("food").textContent = food;
  document.getElementById("step2").classList.add("hidden");   // hide question 2
  document.getElementById("result").classList.remove("hidden"); // show result
}

// Restart: clear the variables and go back to question 1
function restart() {
  temp = "";
  taste = "";
  document.getElementById("status").textContent = "";
  document.getElementById("result").classList.add("hidden"); // hide result
  document.getElementById("step1").classList.remove("hidden"); // show question 1
}
