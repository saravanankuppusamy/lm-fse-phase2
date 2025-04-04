window.onload = initAll;

function initAll() {
	let now = new Date();
	
	if (now.toLocaleDateString) {
		const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();
        alert("It is: " + time + " on " + date );
        if (document.getElementById) {
            document.getElementById("dateString").innerHTML = 
                "It is: " + time + " on " + date;
        }
        else {
            document.write("It is: " + time + " on " + date );
        }

    }
    else {
      alert("Your browser doesn't include locale-specific date/time");
    }	
	
	
}
