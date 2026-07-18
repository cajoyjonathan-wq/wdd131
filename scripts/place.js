const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = `Last Modification:  ${document.lastModified}.`

const temperature = 10;
const windSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
    return (temperature <= 10 && windSpeed > 4.8) ? (13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * temperature * (windSpeed ** 0.16))).toFixed(1) : "N/A";
}

const finalwindChill = calculateWindChill(temperature, windSpeed);

document.getElementById("wind-chill").textContent = finalwindChill