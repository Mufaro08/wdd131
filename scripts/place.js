const footer = document.querySelector("footer");
const para1 = footer.querySelector("p:nth-of-type(1)");
const para2 = footer.querySelector("p:nth-of-type(2)");

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

para1.textContent = `© ${currentYear} Mufaro Justice Tapera`;
para2.textContent = `Last Modified: ${lastModified}`;



const temperatureF = 45; 
const windSpeedMph = 5; 

function calculateWindChill(temp, speed) {
  return (
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16)
  ).toFixed(1);
}

const weatherOutput = document.getElementById("windchill"); 
let windChillValue = "N/A";

if (temperatureF <= 50 && windSpeedMph > 3) {
  windChillValue = `${calculateWindChill(temperatureF, windSpeedMph)} °F`;
}

weatherOutput.textContent = `Windchill: ${windChillValue}`;

function calculateWindChillC(tempC, speedKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1);
}