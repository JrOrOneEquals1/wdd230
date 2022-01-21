date = new Date();

window.onload = function () {
    document.getElementById('year').innerText = date.getFullYear();
    document.getElementById('modified').innerText = document.lastModified;
}