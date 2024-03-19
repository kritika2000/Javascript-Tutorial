/**
 * Event Bubbling -> the event is first captured and handled by the innermost
 * element and then propagated to outer element.
 * https://www.freecodecamp.org/news/event-bubbling-in-javascript/
 */

// button -> form -> root.
/* 
  EL will be fired in this order:- button -> form -> root
  The idea here is:- when the button is clicked, the form and the 
  root element are also getting clicked and their event listeners 
  are getting fired too.
  To stop this behaviour we need to call stopPropagation method.
 */
const button = document.querySelector('form button');
const form = document.querySelector('.form');
const root = document.querySelector('.root');

button.addEventListener('click', (e) => {
  e.preventDefault();
  //   e.stopPropagation(); // button is clicked, then it's EL will be fired only
  console.log('Button was clicked!');
});
// third value is the useCapture -> the event listener will run in root -> form -> button
form.addEventListener('click', () => console.log('Form was clicked'), true);
root.addEventListener('click', () => console.log('Root was clicked!'), true);

/**
 * Event Delegation -> adding event listener to the parent
 * https://www.freecodecamp.org/news/event-delegation-javascript/
 */

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');
/*
listItems.forEach((item, index) => {
  // adding event listener for each item.
  item.addEventListener('click', (e) => {
    e.target.remove();
  });
});
*/
list.addEventListener('click', (e) => {
  // ul as an ancestor contains a lot of elements, e.target would denote the element that triggered the event.
  console.log(e.target, e.currentTarget);
  //   if (e.target.tagName === 'LI') e.target.remove();
});
