// KILELE FITNESS STUDIO
//Main JS file for the Kilele Fitness Studio website

// 1.Display a welcome message to the user
function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to Kilele Fitness Studio! Let's achieve your fitness goals together!";
    alert(welcomeMessage);
}

// 2. Function to calculate BMI
function calculateBMI(weight, height) {
    if (height <= 0) {
        throw new Error("Height must be greater than zero.");
    }
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}   

// 3. Function to display BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// 4. Function to handle BMI calculation and display result
function handleBMICalculation() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!validateInput(weight, "weight") || !validateInput(height, "height")) {
        return;
    }

    try {
        const bmi = calculateBMI(weight, height);
        const category = getBMICategory(bmi);
        document.getElementById("bmiResult").innerText = `Your BMI is ${bmi.toFixed(2)} (${category})`;
    } catch (error) {
        alert(error.message);
    }
}

// 5. Function to display a motivational quote
function displayMotivationalQuote() {
    const quotes = [
        "The only bad workout is the one you didn't do.",
        "Your body can do it—it's your mind you need to convince.",
        "Success isn't just about the destination, it's about the journey."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(randomQuote);
}

// 6. Event listeners for buttons
document.getElementById("calculateBMIButton").addEventListener("click", handleBMICalculation);
document.getElementById("showQuoteButton").addEventListener("click", displayMotivationalQuote); 

// Call the welcome message function when the page loads
window.onload = displayWelcomeMessage;

// 7. Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// 8. Event listener for dark mode toggle button
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

// 9. Function to validate user input for weight and height
function validateInput(value, type) {
    if (isNaN(value) || value <= 0) {
        alert(`Please enter a valid ${type} greater than zero.`);
        return false;
    }
    return true;
}

// 10. Function to reset BMI result
function resetBMIResult() {
    document.getElementById("bmiResult").innerText = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
}

// 11. Event listener for reset button
document.getElementById("resetButton").addEventListener("click", resetBMIResult);

// 12. Function to display a random fitness tip
function displayFitnessTip() {
    const tips = [
        "Stay hydrated and drink plenty of water throughout the day.",
        "Listen to your body and rest when needed.",
        "Set realistic goals and celebrate small victories."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    alert(randomTip);
}

// 13. Event listener for fitness tip button
document.getElementById("showTipButton").addEventListener("click", displayFitnessTip);

