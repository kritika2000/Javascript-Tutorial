// append() vs appendChild() -> https://dev.to/ibn_abubakre/append-vs-appendchild-a4m

// insert adjacent elements
function insertElement() {
  const filter = document.querySelector('.filter--container');
  const h1 = document.createElement('h1');
  h1.textContent = 'INSERT ADJACENT ELEMENT';
  filter.insertAdjacentElement('beforebegin', h1);
}

function insertListItems() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li');
  li.textContent = 'Hello World';
  ul.insertAdjacentElement('beforebegin', li); // insert the li item just before the ul element.
  ul.insertAdjacentElement('afterbegin', li); // insert the li item as the first child or before the first child.
  ul.insertAdjacentElement('beforeend', li); // insert the li item as the last child or just before the end of ul element.
  ul.insertAdjacentElement('afterend', li); // insert the li item right after the ul element, this is the final position of the element.
}

// insertListItems();
// insertElement();

// insert adjacent text

function insertText() {
  const item = document.querySelector('li:first-child');
  const textNode = document.createTextNode('Some Text...');
  //   item.insertAdjacentText('beforebegin', 'Some text...');
  //   item.insertAdjacentText('afterbegin', 'Some text...');
  //   item.insertAdjacentText('beforeend', 'Some text...');
  //   item.insertAdjacentText('afterend', 'Some text...');
  item.insertAdjacentText('beforebegin', textNode.textContent);
  item.insertAdjacentText('afterbegin', textNode.textContent);
  item.insertAdjacentText('beforeend', textNode.textContent);
  item.insertAdjacentText('afterend', textNode.textContent);
}

// insertText();

// insert adjacent HTML

function insertHTML() {
  const clearBtn = document.querySelector('.clear--btn');
  clearBtn.insertAdjacentHTML('beforebegin', `<p>INSERT ADJACENT HTML</p>`);
  clearBtn.insertAdjacentHTML('afterbegin', `<p>INSERT ADJACENT HTML</p>`);
  clearBtn.insertAdjacentHTML('beforeend', `<p>INSERT ADJACENT HTML</p>`);
  clearBtn.insertAdjacentHTML('afterend', `<p>INSERT ADJACENT HTML</p>`);
}

// insertHTML();

// insert before
function insertBeforeItem() {
  // parent node
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = 'insertBefore';
  const thirdItem = document.querySelector('li:nth-child(3)');
  // parentNode.insertBefore(newNode, referenceNode);
  ul.insertBefore(li, thirdItem); // insert the new node before the reference node as a child of the parent.
  //   thirdItem.insertAdjacentElement('beforebegin', li);
}

insertBeforeItem();

/** Difference between insertBefore vs insertAdjacentElement - https://stackoverflow.com/questions/70655665/difference-between-insertadjacentelement-and-insertbefore#:~:text=insertBefore%20works%20with%20nodes%2C%20element,insertAdjacentElement%20works%20with%20elements. */

/*********************************** Challenge *********************************** */

// Custom insert after

function insertAter(newItem, item) {
  const parent = item.parentElement;
  const nextItem = item.nextElementSibling;
  parent.insertBefore(newItem, nextItem);
}

const li = document.createElement('li');
li.textContent = 'Insert Me After!';

const firstItem = document.querySelector('li:first-child');
const lastItem = document.querySelector('li:last-child');
insertAter(li, firstItem); //Insert after first item
insertAter(li, lastItem); // Insert after last item
