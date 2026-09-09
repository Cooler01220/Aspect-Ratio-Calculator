const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const calculateButton = document.getElementById('calculate-btn');
const result = document.getElementById('result');
const menuButton = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const themeButton = document.getElementById('theme-btn');

const savedTheme = localStorage.getItem('aspect-ratio-calculator-theme');
if (savedTheme === 'dark') {
	document.body.classList.add('dark-mode');
}

function updateThemeButton() {
	const darkModeEnabled = document.body.classList.contains('dark-mode');
	themeButton.textContent = darkModeEnabled ? '☾' : '☀';
	themeButton.setAttribute('aria-label', darkModeEnabled ? 'Switch to light mode' : 'Switch to dark mode');
}

updateThemeButton();

themeButton.addEventListener('click', () => {
	const darkModeEnabled = document.body.classList.toggle('dark-mode');
	localStorage.setItem('aspect-ratio-calculator-theme', darkModeEnabled ? 'dark' : 'light');
	updateThemeButton();
});

menuButton.addEventListener('click', () => {
	const isOpen = sidebar.classList.toggle('is-open');
	menuButton.setAttribute('aria-expanded', String(isOpen));
	menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
	sidebar.setAttribute('aria-hidden', String(!isOpen));
});

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
		calculateButton.textContent = 'Error';
		calculateButton.classList.add('is-error');

		setTimeout(() => {
			calculateButton.textContent = 'Calculate';
			calculateButton.classList.remove('is-error');
			result.textContent = '';
		}, 1500);
		return;
	}

	const divisor = greatestCommonDivisor(width, height);
	result.textContent = `Aspect ratio: ${width / divisor}:${height / divisor}`;
});
