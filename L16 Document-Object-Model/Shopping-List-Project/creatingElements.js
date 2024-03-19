// Creating an element of a specific type
const div = document.createElement('div');
div.setAttribute('class', 'my-element');
div.setAttribute('id', 'my-element');
div.setAttribute('title', 'My Element');

// Setting the text to a node directly.
div.innerText = 'Hello World';

// Setting text by creating a text node.
const text = document.createTextNode('Hello World...');

// Appending the element/node to the parent element after the already existing child elements.
div.appendChild(text);
div.innerHTML = text.textContent; // Replacing everything inside element.

console.dirxml(div);

/*********************************** Appending a list item to the shopping list ********************************** */

// Using innerHTML

function createListItem1(text) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.setAttribute('class', 'item');
  li.innerHTML = `<button class="remove-item btn-link text-red">
    ${text}<i class="fas fa-solid fa-circle-xmark"></i>
  </button>`;
  ul.appendChild(li);
}

createListItem1('Eggs');

/**
 * createElement is faster, as browsers are not required to parse the HTML string
 * and then build a node tree out of it; it also doesn't have to attach event listeners
 * as innerHTML does. Using innerHTML will cause browsers to reparse and recreate all
 * DOM nodes inside the element whose innerHTML is modified.
 */

// Using createElement(more performant)

function createListItem2(text) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const button = document.createElement('button');
  const textNode = document.createTextNode(text);
  const icon = document.createElement('i');

  li.setAttribute('class', 'item');
  button.setAttribute('class', 'remove-item btn-link text-red');
  icon.setAttribute('class', 'fas fa-solid fa-circle-xmark');

  button.appendChild(textNode);
  button.appendChild(icon);
  li.appendChild(button);
  ul.appendChild(li);
}

createListItem2('Bread');
