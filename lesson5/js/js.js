var topNum = 1;
var topList = [];
var topListEle = [];

window.onload = function () {
    document.getElementById('addChapter').addEventListener('click', addChapter);
}

function addChapter() {
    var books = {"1 Nephi": 22, "2 Nephi": 33, "Jacob": 7, "Enos": 1, "Jarom": 1, "Omni": 1, "Words of Mormon": 1, "Mosiah": 29, "Alma": 63, "Helaman": 16, "3 Nephi": 30, "4 Nephi": 1, "Mormon": 9, "Ether": 15, "Moroni": 10}
    var text = document.getElementById("favchap").value;
    var lastSpace = text.lastIndexOf(' ');
    var book = text.substring(0, lastSpace);
    var chapter = parseInt(text.substring(lastSpace, text.length));
    if(text != '' && books[book] != 'undefined' && books[book] >= chapter && chapter > 0 && topList.indexOf(text) == -1) {
        document.getElementById("favchap").value = "";
        var newTop = document.createElement('li');
        var topDelete = document.createElement('button');
        topDelete.innerHTML = "&#10006;";
        topDelete.style = "width: 40px;";
        topDelete.setAttribute('onclick', "deleteTop(" + topNum + ")");
        newTop.innerHTML = text;
        document.getElementsByClassName('list')[0].appendChild(newTop);
        newTop.appendChild(topDelete);
        topNum += 1;
        topList.push(text);
        topListEle.push(newTop);
    }
}

function deleteTop(number) {
    number -= 1;
    topListEle[number].remove();
    topList.splice(number, 1);
}