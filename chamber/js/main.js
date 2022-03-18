days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

date = new Date();

window.onload = function () {
    var body = document.getElementsByTagName("body")[0];
    var footer = document.createElement("footer");
    var weekday = days[date.getDay()];
    body.appendChild(footer);
    var text = document.createElement("p");
    text.innerHTML = `&copy; ${date.getFullYear()} | Cameron Roberts | Idaho | BYUI Online Learning | Last Updated: ${document.lastModified} | Call Us Today! 1.208.999.2311 |&nbsp;<a href="mailto:info@rexburgcoc.com">info@rexburgcoc.com</a>`;
    footer.appendChild(text);
    document.getElementById('header-date').innerHTML = `${weekday}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} |&nbsp;`;
    if(weekday == 'Monday' || weekday == 'Tuesday') {
        var banner = document.createElement("span");
        banner.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        banner.setAttribute('class', 'banner')
        document.getElementById('announcements').appendChild(banner);
    }
    if(document.getElementById('announcements').innerText == "") {
        document.getElementById('head-text').style.marginTop = "calc(-50vw + 50%)";
    }
    else if(document.getElementById('announcements').innerText != "") {
        document.getElementById('head-text').style.marginTop = "10px";
    }
}

function expand() {
    var x = document.getElementById("expanded");
    if (x.style.display == "grid") {
        x.style.display = "none";
    } else {
        x.style.display = "grid";
    }
}