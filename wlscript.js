// @ts-check

function initPage() {
	let platformInfoDiv = document.getElementById("platformInfoDiv");
	if (platformInfoDiv instanceof HTMLDivElement) {
		platformInfoDiv.innerText = getIsMobile() ? "Mobile" : "Desktop";
	}
}

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
	const url = new URL(location.href)
	const platform = url.searchParams.get("platform")?.toLowerCase();
	return platform === "mobile";
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