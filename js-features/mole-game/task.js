const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let index = 1; index < 10; index++) {
	const hole = document.getElementById(`hole${index}`);

	const result = function(text) {
		alert(text);
		dead.textContent = 0;
		lost.textContent = 0;
	}

	hole.onclick = function() {
		hole.className === "hole hole_has-mole" ? dead.textContent++ : lost.textContent++;
		
		if (dead.textContent === '10') {
			result("Вы победили!");	
		} else if (lost.textContent === '5') {
			result("Вы проигали! Попробуйте еще раз!");
		}            
	}
}