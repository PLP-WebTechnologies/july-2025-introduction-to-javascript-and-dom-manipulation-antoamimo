// script.js

// PART 1: Variable Declarations and Conditionals

let clickCount = 0; // Variable to track number of button clicks

// Function to handle button click and display greeting
function greetUser() {
    clickCount++;
    const message = document.getElementById("greetingMessage");
    if (clickCount === 1) {
        message.textContent = "Hello! You clicked the button once.";
    } else {
        message.textContent = `You have clicked the button ${clickCount} times.`;
    }
}

// PART 2: Custom Functions

// Function to change the background color randomly
function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4FF33", "#FF33A1", "#FFFFFF"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// PART 3: Loops

// Example of a for loop to print numbers 1 to 5 in the console
for (let i = 1; i <= 5; i++) {
    console.log(`Number: ${i}`);
}

// Example of a while loop to count down from 3
let countdown = 3;
while (countdown > 0) {
    console.log(`Countdown: ${countdown}`);
    countdown--;
}

// PART 4: DOM Interactions

// Event listener to greet the user when the "Click me to Greet" button is clicked
document.getElementById("greetButton").addEventListener("click", greetUser);

// Event listener to change the background color when the "Change Background Color" button is clicked
document.getElementById("changeColorButton").addEventListener("click", changeBackgroundColor);