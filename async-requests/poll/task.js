const poll = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === xhr.DONE) {
        const parsedData = JSON.parse(xhr.response);
        
        poll.textContent = parsedData.data.title;
        let pollAnswers = parsedData.data.answers;

        for (let i in pollAnswers) {
            createItem(pollAnswers[i]);
        };
    }; 
})

const createItem = function(text) {
    const answer = document.createElement('button');
    answer.classList.add('poll__answer');
    answer.textContent = text;
    pollAnswers.appendChild(answer);
}

pollAnswers.addEventListener('click', function() {
    alert('Спасибо, ваш голос засчитан!');
    window.location.reload();//логично получить новый вопрос после ответа
});