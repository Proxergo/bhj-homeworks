let menuLink = Array.from(document.querySelectorAll('.menu__link'));

function openLinks() {
    let menuSub = this.closest('li').querySelector('ul.menu_sub');
    if (menuSub !== null) {
        if (menuSub.classList.contains('menu_active')) {
            menuSub.classList.remove('menu_active');
        } else {
            menuSub.classList.add('menu_active');
        }
        return false;        
    }
    return true;
} 

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = openLinks;
  }