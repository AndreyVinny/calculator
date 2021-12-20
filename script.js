const result = document.getElementById('result');
const resetForm = document.getElementById('reset_form');

result.addEventListener('click', () => {
	const firstNumber = +document.getElementById("firstNumber").value;
	const secondNumber = +document.getElementById("secondNumber").value;
	const operant = document.getElementById('operant').value;
	let sum = 0;

	switch (operant) {
		case '+':
			sum = firstNumber + secondNumber;
		  	break;
		case '-':
			secondNumber < 0 ? sum = 'нельзя отнимать отрицательные числа' : sum = firstNumber - secondNumber;
			break;
		case '*':
			sum = firstNumber * secondNumber;
			break;
		case '/':
			secondNumber == 0 ? sum = 'делить на ноль нельзя' : sum = firstNumber / secondNumber;
			break;
	}

	!isNaN(sum) ? document.querySelector('.answer_text').innerHTML = Math.round(sum) : document.querySelector('.answer_text').innerHTML = sum;
});

resetForm.addEventListener('click', () => {
	document.getElementById('form').reset();
	document.querySelector('.answer_text').innerHTML = '0';
})