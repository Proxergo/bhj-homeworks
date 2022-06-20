const cookies = document.getElementById('cookie');
const clicker = document.getElementById('clicker__counter');
const clickSpeed = document.getElementById('clicker__speed');
let timeClick = Date.now();

cookies.onclick = function clickCookie() {
    clicker.textContent++;
    clicker.textContent % 2 === 0 ? cookies.width = 180 : cookies.width = 200;
    let clickInterval = Date.now() - timeClick;
    timeClick = Date.now();
    clickSpeed.textContent = (1/(clickInterval/1000)).toFixed(2);      
}

