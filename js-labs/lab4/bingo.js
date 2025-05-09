window.onload = initAll;

function initAll() {
	if (document.getElementById) {
		document.getElementById("pick").onclick = displayNumber;
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

function displayNumber() {
	const number = generateNumber();
	
	document.getElementById("number").innerHTML = 
		"The next BINGO number is: " + number[0] + " - " + number[1];


}

function generateNumber() {
	const columnLabel = new Array("B", "I", "N", "G", "O");
	const columnIndex = Math.floor(Math.random() * 5);
	const newNum = Math.floor(Math.random() * 15) + 1 
		+ (columnIndex * 15);
	
	return new Array(columnLabel[columnIndex], newNum);


}
