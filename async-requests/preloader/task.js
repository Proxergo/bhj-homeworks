const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        document.querySelector('#loader').classList.remove('loader_active');
    };

    const valute = JSON.parse(xhr.responseText).response.Valute;
    document.querySelector('#items').innerHTML = '';
    getAnswer(valute);
    localStorage.setItem('currency', xhr.responseText);
});

function getAnswer(item) {
    for (let key in item) {
        document.getElementById('items').insertAdjacentHTML('beforeend', `
        <div class="item">
            <div class="item__code">${item[key].CharCode}</div>
            <div class="item__value">${item[key].Value}</div>
            <div class="item__currency">&#x20bd</div>
        </div>`);
    }
};


window.addEventListener('load', () => {
    const lastCurrency = JSON.parse(localStorage.getItem('currency')).response.Valute;
    document.querySelector('#loader').classList.remove('loader_active');
    getAnswer(lastCurrency);
});