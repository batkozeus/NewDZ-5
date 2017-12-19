// Task 1

const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

// -------------English keyboard-----------------

const alphabetEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const myAlphabetEn = document.getElementById('alphabetEn');
myAlphabetEn.innerHTML = `Алфавит английский: ${alphabetEn}`;

const line1En = document.getElementById('line1En');
const line2En = document.getElementById('line2En');
const line3En = document.getElementById('line3En');

// -------------------------------------------

// -------------Russian keyboard-----------------

const alphabetRu = "йцукенгшщзхъфывапролджэячсмитьбю.";

const myAlphabetRu = document.getElementById('alphabetRu');
myAlphabetRu.innerHTML = `Алфавит русский: ${alphabetRu}`;

const line1Ru = document.getElementById('line1Ru');
const line2Ru = document.getElementById('line2Ru');
const line3Ru = document.getElementById('line3Ru');

// -------------------------------------------

// -------------Ukrainian keyboard-----------------

const alphabetUa = "йцукенгшщзхїфівапролджєячсмитьбю.";

const myAlphabetUa = document.getElementById('alphabetUa');
myAlphabetUa.innerHTML = `Алфавит украинский: ${alphabetUa}`;

const line1Ua = document.getElementById('line1Ua');
const line2Ua = document.getElementById('line2Ua');
const line3Ua = document.getElementById('line3Ua');

// -------------------------------------------

addKeyboardLayout (alphabetEn);
addKeyboardLayout (alphabetRu);
addKeyboardLayout (alphabetUa);

console.log(keyboard);

function addKeyboardLayout (y) {

	let massAlphabet = y.split('');

	let firstLine = massAlphabet.slice(0,12);
	let secondLine = massAlphabet.slice(12,23);
	let thirdLine = massAlphabet.slice(23,35);

	let stringFirstLine = firstLine.join(" ");
	let stringSecondLine = secondLine.join(" ");
	let stringThirdLine = thirdLine.join(" ");

	if (y == alphabetEn) {
		line1En.innerHTML = `Верхний ряд английский - ${stringFirstLine}`;
		line2En.innerHTML = `Средний ряд английский - ${stringSecondLine}`;
		line3En.innerHTML = `Нижний ряд английский - ${stringThirdLine}`;

		keyboard.layouts.en.topRow = firstLine;
		keyboard.layouts.en.middleRow = secondLine;
		keyboard.layouts.en.bottomRow = thirdLine;
	}

	if (y == alphabetRu) {
		line1Ru.innerHTML = `Верхний ряд русский - ${stringFirstLine}`;
		line2Ru.innerHTML = `Средний ряд русский - ${stringSecondLine}`;
		line3Ru.innerHTML = `Нижний ряд русский - ${stringThirdLine}`;

		keyboard.layouts.ru.topRow = firstLine;
		keyboard.layouts.ru.middleRow = secondLine;
		keyboard.layouts.ru.bottomRow = thirdLine;
	}

	if (y == alphabetUa) {
		line1Ua.innerHTML = `Верхний ряд украинский - ${stringFirstLine}`;
		line2Ua.innerHTML = `Средний ряд украинский - ${stringSecondLine}`;
		line3Ua.innerHTML = `Нижний ряд украинский - ${stringThirdLine}`;

		keyboard.layouts.ua.topRow = firstLine;
		keyboard.layouts.ua.middleRow = secondLine;
		keyboard.layouts.ua.bottomRow = thirdLine;
	}

}


// Task 2

let language;

var myLanguage = document.getElementById('myLanguage');

let myKeyboard = [];

do {
	language = prompt('Какой язык Вы хотите использовать на тренажере', '0 - en, 1 - ru, 2 - ua');
	if (language == 0) {
		keyboard.currentLang = keyboard.langs[0];
		myLanguage.innerHTML = 'Вы выбрали язык - английский' ;
		myKeyboard.push(keyboard.layouts.en.topRow);
		myKeyboard.push(keyboard.layouts.en.middleRow);
		myKeyboard.push(keyboard.layouts.en.bottomRow);
		myKeyboard = (keyboard.layouts.en.topRow).concat((keyboard.layouts.en.middleRow),(keyboard.layouts.en.bottomRow));
	}
	else if (language == 1) {
		keyboard.currentLang = keyboard.langs[1];
		myLanguage.innerHTML = 'Вы выбрали язык - русский' ;
		myKeyboard.push(keyboard.layouts.ru.topRow);
		myKeyboard.push(keyboard.layouts.ru.middleRow);
		myKeyboard.push(keyboard.layouts.ru.bottomRow);
		myKeyboard = (keyboard.layouts.ru.topRow).concat((keyboard.layouts.ru.middleRow),(keyboard.layouts.ru.bottomRow));
	}
	else if (language == 2) {
		keyboard.currentLang = keyboard.langs[2];
		myLanguage.innerHTML = 'Вы выбрали язык - украинский' ;
		myKeyboard.push(keyboard.layouts.ua.topRow);
		myKeyboard.push(keyboard.layouts.ua.middleRow);
		myKeyboard.push(keyboard.layouts.ua.bottomRow);
		myKeyboard = (keyboard.layouts.ua.topRow).concat((keyboard.layouts.ua.middleRow),(keyboard.layouts.ua.bottomRow));
	}
	else if (language == null) {
		break;
	}
	else  {
		alert('Выбран не доступный язык!');
	}	
}
while (language > 2 && language != null);

console.log(myKeyboard);


// Task 3

const letterMain = document.getElementById('letterMain');

document.getElementById('getAlphabetNumber').onclick = function () {
	getRandCharInAlph ();
}

function getRandCharInAlph () {

	// let newKeyboard = myKeyboard.split('');
	let keyboardLetterж
	let keyboardLength = myKeyboard.length;
	let keyboardNumber = Math.floor(keyboardLength * Math.random());

	for (let i=0; i<keyboardLength; i++) {
		if (i == keyboardNumber) {
			keyboardLetter = myKeyboard[i];
		}
	}


	letterMain.innerHTML = `Cлучайная буква - ${keyboardLetter}`;

}


