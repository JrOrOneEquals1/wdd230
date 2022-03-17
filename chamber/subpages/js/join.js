date = new Date();

function redirect() {
    document.getElementById('datetime').value = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    window.location.href = "./thankyou.html";
}