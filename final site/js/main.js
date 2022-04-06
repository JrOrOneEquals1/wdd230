const date = new Date();
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

window.onload = function () {
    // try {
    //     navigator.geolocation.getCurrentPosition(setLatLon);
    // }
    // catch {
        var position = {coords: {latitude: 51.5, longitude: 0.1}}
        setLatLon(position);
    // }
}

async function setLatLon(position) {
    var lat = Math.round(position.coords.latitude * 100) / 100;
    var lon = Math.round(position.coords.longitude * 100) / 100;
    var response = await fetch("https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=223c2347c067d492257c231fb1178c51");
    var json = await response.json();
    try {
        document.getElementById('weather').innerHTML += `<p>The temperature in your location is currently: ${Math.round(json['current']['temp'])} &#176;F</p>`;
        document.getElementById('weather').innerHTML += `<p>The weather in your location is currently: ${json['current']['weather'][0]['main']}</p>`;
        document.getElementById('weather').innerHTML += `<p>The humidity in your location is currently: ${json['current']['humidity']}%</p>`;
        document.getElementById('forecast').innerHTML += `<table id="forecastTable"><tr><td id='tableHeader'>Tomorrow</td><td id='tableHeader'>${weekdays[date.getDay() + 2]}</td><td id='tableHeader'>${weekdays[date.getDay() + 3]}</td></tr><tr><td id='info'><p>${Math.round(json['daily'][0]['temp']['day'])} &#176;F</p><p>${json['daily'][0]['weather'][0]['main']}</p></td><td id='info'><p>${Math.round(json['daily'][1]['temp']['day'])} &#176;F</p><p>${json['daily'][1]['weather'][0]['main']}</p></td><td id='info'><p>${Math.round(json['daily'][2]['temp']['day'])} &#176;F</p><p>${json['daily'][2]['weather'][0]['main']}</p></td></tr></table>`;
    }
    catch {}
    try {
        var templeInfo = await fetch("./js/temples.json");
        var temples = await templeInfo.json();
        temples.forEach(function (temple) {
            var ele = document.getElementById(temple["id"]);
            ele.innerHTML = `<h2>The ${temple["temple"]} Temple <img class='likeButton' id='${temple["id"]}LikeButton' src='images/thumb.png' width=15px></h2>`;
            ele.innerHTML += `<p>The ${temple["temple"]} temple was announced on ${temple["announced"]}.</p>`;
            ele.innerHTML += `<p>Construction started on ${temple["groundbreak"]}, and the temple was dedicated on ${temple["dedicated"]}.</p>`;
            ele.innerHTML += `<p>They are located at ${temple["address"]}, and are open ${temple["ordinance"]} for ordinances, and ${temple["session"]} for sessions.</p>`;
            ele.innerHTML += `<p>You can contact them by phone at ${temple['phone']}. They ${temple['services']}.</p>`;
            ele.innerHTML += `<p>The next scheduled closure is on ${temple['closure']}.</p>`;
            ele.innerHTML += `<p>Log in <a href="${temple['email']}">here</a> to send an email to this temple.</p>`;
        });
        setClickEvents();
    }
    catch {}
}

function redirect() {
    window.location.href = "./thankyou.html";
}


function setClickEvents() {
    $(".likeButton").click(function() {
        $(this).toggleClass('liked');
        var btnStorage = $(this).attr("id");
        if(this.getAttribute('class').includes('liked')) {
            localStorage.setItem(btnStorage, 'true');
            this.setAttribute('src', 'images/thumb2.png');
        }
        else {
            localStorage.removeItem(btnStorage, 'true');
            this.setAttribute('src', 'images/thumb.png');
        }
    });

    $(".likeButton").each(function() {
        var mainlocalStorage = $(this).attr("id");
        console.log(localStorage.getItem(mainlocalStorage))
        if(localStorage.getItem(mainlocalStorage) == 'true') {
            $(this).addClass("liked");
            this.setAttribute('src', 'images/thumb2.png');
        } else {
            $(this).removeClass("liked");
        }
    });
}