var body = document.querySelector("#gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("#myInput");
var random = document.querySelector(".random");
var copybtn = document.querySelector(".copy");

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
	css.value = css.textContent;
}

//From https://www.paulirish.com/2009/random-hex-color-code-snippets/
function randomHex(){
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}


//Set random hex colors
function randomColor(){
	color1.value = randomHex();
	color2.value = randomHex();
	setGradient();
}

//copy result function
function copyResult(){
	/* Get the text field */
  	var copyText = document.getElementById("myInput");

 	/* Select the text field */
  	copyText.select();
  	copyText.setSelectionRange(0, 99999); /* For mobile devices */

  	/* Copy the text inside the text field */
  	document.execCommand("copy");

  	/* Alert the copied text */
  	alert("Copied the text: " + copyText.value);
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomColor);

copybtn.addEventListener("click", copyResult);