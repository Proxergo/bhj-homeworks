const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const userMessages = document.querySelector('.message__text');


const timestamp = () => {
    let time = new Date()
    return time.getHours() + ":" + time.getMinutes()
}



chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});


let botMessages = [
    'Добрейшего вечера! Мне!',
    'Ваш звонок очень важен для нас',
    'Прекрасная погода на Бали',
    'Нам не очень интересно что вы хотите сказать',
];

chatInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && chatInput.value != '') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${timestamp()}</div>
            <div class="message__text">${chatInput.value}</div>
        </div>`;

        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${timestamp()}</div>
            <div class="message__text">${botMessages[Math.floor(Math.random()*botMessages.length)]}</div>
        </div>`;
    }
});