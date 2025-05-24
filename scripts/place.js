const full = document.querySelector("#full");

const today = new Date(document.lastModified);

full.innerHTML = today;

document.addEventListener("DOMContentLoaded", function () {
    // Static values
    const temperature = 8; // in °C
    const windSpeed = 10; // in km/h

    // Wind chill calculation for metric (°C, km/h)
    function calculateWindChill(temp, speed) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(1);
    }

    // Conditions for displaying wind chill
    let windChillOutput = "N/A";
    if (temperature <= 10 && windSpeed > 4.8) {
        windChillOutput = `${calculateWindChill(temperature, windSpeed)} °C`;
    }

    // Insert result in the weather box
    const weatherBox = document.querySelector(".floating-box.weather");
    if (weatherBox) {
        const windChillElement = document.createElement("p");
        windChillElement.innerHTML = `<strong>Wind Chill:</strong> ${windChillOutput}`;
        weatherBox.appendChild(windChillElement);
    }

    // Optional full date output
    const fullDateElement = document.getElementById("full");
    if (fullDateElement) {
        const now = new Date();
        fullDateElement.textContent = now.toString();
    }
});
