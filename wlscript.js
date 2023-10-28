// @ts-check

/**
 * @returns {String} The text in the source word input box
 */
function getSourceText() {
	let sourceWordInput = document.getElementById("sourceWordInput");
	return (sourceWordInput instanceof HTMLInputElement) ? sourceWordInput.value : "";
}

/**
 * @returns {boolean}
 */
function getIsMobile() {
	return window.innerWidth < 900;
}

function searchWiktionary() {
	const sourceText = getSourceText();
	const url = getIsMobile()
		? `https://en.m.wiktionary.org/wiki/${sourceText}#Spanish`
		: `https://en.wiktionary.org/wiki/${sourceText}#Spanish`;
	window.open(url, "_blank");
}

function searchSpanishDict() {
	const url = `https://www.spanishdict.com/translate/${getSourceText()}`;
	window.open(url, "_blank");
}

function searchGoogleTranslateToEnglish() {
	const url = `https://translate.google.se/?sl=es&tl=en&text=${getSourceText()}&op=translate`;
	window.open(url, "_blank");
}

function searchGoogleTranslateToSwedish() {
	const url = `https://translate.google.se/?sl=es&tl=sv&text=${getSourceText()}&op=translate`;
	window.open(url, "_blank");
}
