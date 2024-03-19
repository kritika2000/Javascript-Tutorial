// Selecting Elements
const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  console.log(e.target.name, e.target.value);
  heading.textContent = e.target.value;
}

/* 
  Use input event for for elements, rather than using key events, 
  as it is not necessary that we use keys to take the input.
*/
// itemInput.addEventListener('input', onInput);

// Select List
// priorityInput.addEventListener('input', onInput);
// We can use change event on select list.
priorityInput.addEventListener('change', onInput); // This event will fire when there is a change in value of select list.

// Checkboxes
// This event will be fired when checkbox value is changed
checkbox.addEventListener('input', function (e) {
  console.log(e.target.checked); // true if the input is checked.
  heading.textContent = e.target.checked ? 'Checked' : 'Not Checked';
});

// This event will be fired when the input element is focused.
itemInput.addEventListener('focus', function (e) {
  console.log('Input is focused');
  itemInput.style.outline = '1px solid red';
});
// This event will be fired when the focus is removed from the input element
itemInput.addEventListener('blur', function (e) {
  console.log('Input is not focused');
  itemInput.style.outline = 'none';
});
