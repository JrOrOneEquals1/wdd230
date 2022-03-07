function hamburgerClick() {
    var x = document.getElementById("hamburgerNav");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    console.log('hey')
}

date = new Date();

window.onload = function () {
    var html = document.getElementsByTagName("html")[0];
    var footer = document.createElement("footer");
    html.appendChild(footer);
    var text = document.createElement("p")
    text.innerHTML = "(c) <span id='year'></span> | Cameron Roberts | Idaho | BYUI Online Learning | Last Updated: <span id='modified'>"
    footer.appendChild(text)
    document.getElementById('year').innerText = date.getFullYear();
    document.getElementById('modified').innerText = document.lastModified;
}