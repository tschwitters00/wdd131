const temperature = 86
const conditions = "Cloudy"
const wind = 2

function calculateWindChill(temp, wind) {
    var windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16))
    windChill = Math.round(windChill);
    let chill = windChill.toString();
    return chill + "°F"
}

if (temp <= 50 && wind > 3) {
    var windChill = calculateWindChill(temperature, wind)
}

else {
    let windChill = "N/A"
}

document.getElementById("temperature").innerHTML = temperature;
document.getElementById("conditions").innerHTML = conditions;
document.getElementById("wind").innerHTML = wind;
document.getElementById("windChill").innerHTML = windChill;