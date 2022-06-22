const linksList = Array.from(document.querySelectorAll(".dropdown__link"));
const buttons =  Array.from(document.getElementsByClassName("dropdown"));

buttons.forEach(item => click(item));

function click(btn) {
    btn.addEventListener('click', function() {
        let dropdown = this.querySelector('.dropdown__list');
        
        if (dropdown.classList.contains('dropdown__list_active')) {
            dropdown.className = 'dropdown__list';
            return false;
        } else {
            dropdown.className = 'dropdown__list dropdown__list_active';
        }
    });
}

for (let i = 0; i < linksList.length; i++) {
    linksList[i].closest(".dropdown__item").onclick = function() {
        linksList[i].closest(".dropdown").querySelector(".dropdown__value").textContent = linksList[i].innerText;
        return false;
    };
}; 