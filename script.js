const button = document.getElementById('enter');
const input = document.getElementById('userinput');
const ul = document.querySelector('ul');

function inputLenght() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement('li'); // create the li element
  li.appendChild(document.createTextNode(input.value)); // create text inside of it
  ul.appendChild(li); // append (put) into the page
  input.value = ''; // clear the input fieldagain
}

function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(e) {
  // console.log(e);
  //console.log(e.which); // to see the keycode of the pressed button, but a better solution is to use e.key for the key pressed
  const keyName = e.key;

  if (keyName === 'Enter' && inputLenght() > 0) {
    createListElement();
  }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);
