let temp = "";  
let taste = ""; 

function selectTemp(choice) {
  temp = choice;
  document.getElementById("status").textContent = "You chose: " + temp;
  document.getElementById("step1").classList.add("hidden"); 
  document.getElementById("step2").classList.remove("hidden"); 
}

function selectTaste(choice) {
  taste = choice;
  document.getElementById("status").textContent = "You chose: " + temp + " + " + taste;

  let food = ""; 

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
    food = "Just eat anything";
  }

  document.getElementById("food").textContent = food;
  document.getElementById("step2").classList.add("hidden"); 
  document.getElementById("result").classList.remove("hidden"); 
}