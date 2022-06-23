const interestsList = document.querySelectorAll('.interest__check')

function checkLists (event) {
	let target = event.target;
	let child = target.closest('li').querySelectorAll('ul li');

	if (child.length > 0) {
		for (let i = 0; i < child.length; i++) {
			child[i].querySelector('input').checked = target.checked;
		}
	}

	listChecked(target);
}

function listChecked(target) {
	let parentUl = target.closest('ul');
	let childInput = parentUl.querySelectorAll('input');
	let liParent = parentUl.closest('li');

	if (liParent) {
		liParent = liParent.querySelector('input');
		let array = [];

		for (let i = 0; i < childInput.length; i++) {
			array.push(childInput[i].checked);
		}

		liParent.checked = array.every(Boolean);
		liParent.indeterminate = !array.every(Boolean) && array.some(Boolean);

		listChecked(liParent);
	}

}

interestsList.forEach(item => {
  item.addEventListener('click', checkLists) 
});