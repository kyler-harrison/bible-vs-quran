// cmon man no cheating allowed
var answerlol;
var correctCount;
var numQuestions = 10;
var numAnswered = 0;

function randoInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function genQuote() {
	var maxNum = 5001;
	var clsInt = randoInt(0, 2);
	var quoteIdx = randoInt(0, maxNum);

	if (clsInt == 0) {
		var cls = "bible";
	} else {
		var cls = "quran";
	}

	return {"quote": data[cls][quoteIdx], "cls": cls};
}

function replaceQuote() {
	var quoteCont = document.getElementById("quote-cont");
	var quoteData = genQuote();
	quoteCont.innerHTML = quoteData["quote"];
	answerlol = quoteData["cls"];
}

function end() {
	document.getElementById("bible-btn").remove();
	document.getElementById("quran-btn").remove();
	document.getElementById("quote-cont").remove();
	var statusBox = document.getElementById("status");
	var resultStr;

	switch(correctCount) {
		case 0:
			resultStr = "PURE ATHEIST";
			break;
		case 1:
			resultStr = "ILLITERATE";
			break;
		case 2:
			resultStr = "HERETIC";
			break;
		case 3:
			resultStr = "LIKELY GOING TO HELL";
			break;
		case 4:
			resultStr = "DISAPPOINTMENT OF THE FAMILY";
			break;
		case 5:
			resultStr = "ETERNAL TORMENT IMMINENT";
			break;
		case 6:
			resultStr = "SEEK REPENTANCE";
			break;
		case 7:
			resultStr = "RELIGIOUS WEEKENDER";
			break;
		case 8:
			resultStr = "TRY HARDER FOR SALVATION";
			break;
		case 9:
			resultStr = "NEARLY SAVED";
			break;
		case 10:
			resultStr = "RELIGIOUS ZEALOT";
			break;
		default:
			resultStr = "WHAT DID YOU DO?";
	}

	statusBox.innerHTML = correctCount + "/10 correct" + "<br><br>" + resultStr;
	numAnswered = 0;
	correctCount = 0;
}

function main() {
	// i am the best javascript programmer on planet earth
	replaceQuote();
	correctCount = 0;
	var statusBox = document.getElementById("status");
	statusBox.innerHTML = numAnswered.toString() + "/10";

	document.getElementById("bible-btn").addEventListener("click", () => {
		numAnswered += 1;
		var statusBox = document.getElementById("status");

		if ("bible" == answerlol) {
			correctCount += 1;
		} 

		if (numAnswered == numQuestions) {
			end();
		} else {
			replaceQuote();
			statusBox.innerHTML = numAnswered.toString() + "/10";
		}

	});

	document.getElementById("quran-btn").addEventListener("click", () => {
		numAnswered += 1;
		var statusBox = document.getElementById("status");

		if ("quran" == answerlol) {
			correctCount += 1;
		} 

		if (numAnswered == numQuestions) {
			end();
		} else {
			replaceQuote();
			statusBox.innerHTML = numAnswered.toString() + "/10";
		}
	});
}


window.onload = main();
