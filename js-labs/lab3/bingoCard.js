window.onload = initAll;
// global used numbers array
const usedNums = new Array(76);

function initAll() {
	if (document.getElementById) {
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

function newCard() {
	for (let i=0; i<24; i++) {
		setSquare(i);
	}
}

function setSquare(thisSquare) {
	let currSquare = "square" + thisSquare;
	let colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	// calculate column basis
	const colBasis = colPlace[thisSquare] * 15;
	
	let newNum;

	// loop until an unused number is found
	do {
		newNum = colBasis + getNewNum();
	}
	while ( usedNums[newNum] );
	// mark number used
	usedNums[newNum] = true;
	
	document.getElementById(currSquare).innerHTML = newNum;
	document.getElementById(currSquare).className = "";
	document.getElementById(currSquare).onmousedown = toggleColor;
}

function getNewNum() {
	return Math.ceil(Math.random() * 15);
}

function anotherCard() {
	// clear used numbers
	for (let i = 1; i < usedNums.length; i++) {
		usedNums[i] = false;
	}	
	
	newCard();
	return false;
}

function toggleColor(evt) {
	if (evt) {
		let thisSquare = evt.target;
	}
	else {
		let thisSquare = window.event.srcElement;
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	}
	else {
		thisSquare.className = "";
	}
}
