const temperature = 86
const conditions = "Cloudy"
const wind = 2

function calculateWindChill(temp, wind) {
    return Math.round(35.74 + 0.6215*temp - 35.75*wind**0.16 + 0.4275*temp*wind**0.16); 
}

if (temperature <= 50 && wind > 3) {
    var chill = calculateWindChill(temperature, wind);
    var windChill = chill.toString();
    windChill += "°F";
}

else {
    windChill = "N/A";
}

document.getElementById("temperature").innerHTML = temperature;
document.getElementById("conditions").innerHTML = conditions;
document.getElementById("wind").innerHTML = wind;
document.getElementById("windChill").innerHTML = windChill;