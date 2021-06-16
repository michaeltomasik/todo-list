const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomColorBtn = document.getElementById('random-color');

////////////////////////////////////////////////////////
// Change the background using the 2 inputs on the screen
const setGradient = function () {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;

  css.textContent = `${body.style.background};`;
};

setGradient();

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

//////////////////////////////////////////////////////
// Display random linear gradient
const init = function () {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  setGradient();
};

// GET RANDOM LINEAR GRADIENT ON PAGE LOAD
window.onload = init();

///////////////////////
// 1)

//////////////////////
// 2)

/////////////////////////////////////////////////////
// 3) Add a random button which generates two random numbers for the colour inputs.
function getRandomColor() {
  let color = '#';
  let letters = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

randomColorBtn.addEventListener('click', () => {
  init();
});

/*
---------------------------------------------------------------------
==>  DON'T UNDERSTAND THE FIRST " QUESTIONS"  <==
1) Write code so that the colour inputs match the background generated on the first page load. 
2) Display the initial CSS linear gradient property on page load.
---------------------------------------------------------------------
3) BONUS: Add a random button which generates two random numbers for the colour inputs.
You may also see different behaviours with the Color widget based on what browser you use. Remember, all browsers are implemented differently. */
