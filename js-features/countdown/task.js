const timer = document.getElementById('timer');

let reverseTimer = setInterval(() => {
    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(reverseTimer);
        
    } else {
        timer.textContent -= 1;
    }    
}, 1000);