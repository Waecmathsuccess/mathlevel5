// Select elements
const temperatureInput = document.getElementById("temperatureInput");
const conversionType = document.getElementById("conversionType");
const convertButton = document.getElementById("convertButton");
const result = document.getElementById("result");

// Function to convert temperature
function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const type = conversionType.value;

    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid number!";
        result.style.color = "red";
        return;
    }

    let convertedTemp;

    if (type === "CtoF") {
        convertedTemp = (temperature * 9/5) + 32;
        result.textContent = `${temperature}°C is ${convertedTemp.toFixed(2)}°F`;
    } else if (type === "FtoC") {
        convertedTemp = (temperature - 32) * 5/9;
        result.textContent = `${temperature}°F is ${convertedTemp.toFixed(2)}°C`;
    }

    result.style.color = "green";
}

// Add event listener
convertButton.addEventListener("click", convertTemperature);
