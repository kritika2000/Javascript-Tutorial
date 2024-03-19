const itemInput = document.querySelector('.item-input');

const onKeyPress = (e) => {
  console.log('Key Press');
};
const onKeyUp = (e) => {
  console.log('Key Up');
};
const onKeyDown = (e) => {
  console.log('Key Down', e.key);

  // key
  console.log(e.key); // shows the current key typed in the input
  document.querySelector('h1').innerText = e.key;
  if (e.key === 'Enter') alert('You Pressed Enter');

  // key code -> every key on the keyboard has some key code.(Eg:- Enter key has a code of 13)
  console.log(e.keyCode);
  // code
  if (e.repeat) {
    // This will be true if the key is hold down
    console.log('You are holding down' + e.key);
  }
  console.log('Shift: ' + e.shiftKey); // true, if the key is pressed with holding shift key.
  console.log('Control: ' + e.ctrlKey); // true, if the key is pressed with holding control key.
  console.log('Alt: ' + e.altKey); // true, if the key is pressed with Alt Key(option on mac)
};

// this event gets fired when a key board key is pressed in the element(Eg: input)
itemInput.addEventListener('keypress', onKeyPress);

// This event gets fired when key is released in the input after pressing.
itemInput.addEventListener('keyup', onKeyUp);

// This event gets fired until the key is release after it is pressed.
itemInput.addEventListener('keydown', onKeyDown); // key down is fired before key press.
