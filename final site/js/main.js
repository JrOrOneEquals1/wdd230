const date = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

window.onload = function () {
    navigator.geolocation.getCurrentPosition(setLatLon);
}

async function setLatLon(position) {
    var lat = Math.round(position.coords.latitude * 100) / 100;
    var lon = Math.round(position.coords.longitude * 100) / 100;
    var response = await fetch("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=223c2347c067d492257c231fb1178c51");
    var json = await response.json();
    console.log(json)
    try {
        document.getElementById('weather').innerHTML += `<p>The temperature in your location is currently: ${json['current']['temp']} &#176;F</p>`;
        document.getElementById('weather').innerHTML += `<p>The weather in your location is currently: ${json['current']['weather'][0]['main']}</p>`;
        document.getElementById('weather').innerHTML += `<p>The humidity in your location is currently: ${json['current']['humidity']}%</p>`;
        document.getElementById('forecast').innerHTML += `<table id="forecastTable"><tr><td>Tomorrow</td><td>${weekdays[date.getDay() + 2]}</td><td>${weekdays[date.getDay() + 3]}</td></tr><tr><td><p>${json['daily'][0]['temp']['day']} &#176;F</p><p>${json['daily'][0]['weather'][0]['main']}</p></td><td><p>${json['daily'][1]['temp']['day']} &#176;F</p><p>${json['daily'][1]['weather'][0]['main']}</p></td><td><p>${json['daily'][2]['temp']['day']} &#176;F</p><p>${json['daily'][2]['weather'][0]['main']}</p></td></tr></table>`;
    }
    catch {}
    try {
        var templeInfo = await fetch("./js/temples.json");
        var temples = await templeInfo.json();
        temples.forEach(function (temple) {
            var ele = document.getElementById(temple["id"]);
            ele.innerHTML = `<h2>The ${temple["temple"]} Temple</h2>`;
            ele.innerHTML += `<p>The ${temple["temple"]} temple was announced on ${temple["announced"]}.</p>`;
            ele.innerHTML += `<p>Construction started on ${temple["groundbreak"]}, and the temple was dedicated on ${temple["dedicated"]}.</p>`;
        });
    }
    catch {}
}

date = new Date();

function redirect() {
    document.getElementById('datetime').value = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    window.location.href = "./thankyou.html";
}