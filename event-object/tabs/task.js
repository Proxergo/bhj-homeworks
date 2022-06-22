const content = Array.from(document.querySelectorAll('.tab__content'));
const tabsList =  Array.from(document.querySelectorAll('.tab'));

for (const tab of tabsList) {
    tab.addEventListener('click', () => {
        const activeTabs = document.querySelector('.tab_active');
        const activeContent = document.querySelector('.tab__content_active');

        activeTabs.className = 'tab';
        activeContent.className = 'tab__content';
        
        tab.className = 'tab tab_active';
        content[tabsList.indexOf(tab)].className = 'tab__content tab__content_active';
    });
}

