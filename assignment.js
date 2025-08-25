// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsiusValue) {
    let kelvinValue = celsiusValue + 273.15;
    console.log("The conversion of Celsius to Kelvin is", kelvinValue.toFixed(2) + " K");
    return kelvinValue;
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsiusValue) {
    let fahrenheitValue = (celsiusValue * 9/5) + 32;
    console.log("The conversion of Celsius to Fahrenheit is", fahrenheitValue.toFixed(2) + " °F");
    return fahrenheitValue;
}

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvinValue) {
    let celsiusValue = kelvinValue - 273.15;
    console.log("The conversion of Kelvin to Celsius is", celsiusValue.toFixed(2) + " °C");
    return celsiusValue;
}

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvinValue) {
    let fahrenheitValue = (kelvinValue - 273.15) * 9/5 + 32;
    console.log("The conversion of Kelvin to Fahrenheit is", fahrenheitValue.toFixed(2) + " °F");
    return fahrenheitValue;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheitValue) {
    let celsiusValue = (fahrenheitValue - 32) * 5/9;
    console.log("The conversion of Fahrenheit to Celsius is", celsiusValue.toFixed(2) + " °C");
    return celsiusValue;
}


// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheitValue) {
    let kelvinValue = (fahrenheitValue - 32) * 5/9 + 273.15;
    console.log("The conversion of Fahrenheit to Kelvin is", kelvinValue.toFixed(2) + " K");
    return kelvinValue;
}
