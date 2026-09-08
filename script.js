const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const calculateButton = document.getElementById('calculate-btn');
const result = document.getElementById('result');

function greatestCommonDivisor(firstNumber, secondNumber) {
	while (secondNumber !== 0) {
		const remainder = firstNumber % secondNumber;
		firstNumber = secondNumber;
		secondNumber = remainder;
	}

	return firstNumber;
}

calculateButton.addEventListener('click', () => {
	const width = Number(widthInput.value);
	const height = Number(heightInput.value);

	if (width <= 0 || height <= 0) {
		result.textContent = 'this is bad bad bad sorry cant find the aspect ratio';
		return;
	}

	const divisor = greatestCommonDivisor(width, height);
	result.textContent = `Aspect ratio: ${width / divisor}:${height / divisor}`;
});
