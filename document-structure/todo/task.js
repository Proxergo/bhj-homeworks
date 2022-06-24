const input = document.querySelector('#task__input');
const taskList = document.querySelector('#tasks__list');
const addButton = document.querySelector('#tasks__add');


addButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (input.value.trim().length !== 0) {
        createTask();
        input.value = '';
    }
});

addButton.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (input.value.trim().length !== 0 && event.key === 'Enter') {
        createTask();
        input.value = '';
    }
});

function createTask() {
    taskList.insertAdjacentHTML('beforeEnd', `
    <div class="task">
        <div class="task__title">${input.value.trim()}</div>
        <a href="#" class="task__remove">&times;</a>
    </div>`)

    const remove = document.querySelectorAll('.task__remove');

    let lastTask = remove[remove.length - 1];

    lastTask.addEventListener('click', function(event) {
        event.preventDefault();
        event.target.closest('.task').remove();
    });

}