const fontSizes = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

function changeFontSize(event) {
    event.preventDefault();
    fontSizes.forEach((elem) => elem.classList.remove('font-size_active'));
    book.className = 'book';
    this.classList.add('font-size_active');
    if (this.dataset.size) {
        book.classList.add('book_fs-' + this.dataset.size);
    }
}

fontSizes.forEach((item) => {
    item.addEventListener('click', changeFontSize);
});