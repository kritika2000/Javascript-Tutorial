let output;

output = document.all; // deprecated, gives an HTML collection of all the elements in the page/document.
output = document.all[11]; // gives the element at 11th index in the HTML Collection(not an array).
output = document.all.length; // gives the length of the HTML Collection.

output = document.documentElement; // gives html + everything inside html tag.
// document.documentElement.parentNode -> #document node.

output = document.head; // get the head of the document.
output = document.body; // get the body of the document.

output = document.head.children; // get the direct children of the element in an HTML Collection.
output = document.body.children;

output = document.doctype; // gives the document type, <!DOCTYPE html>
output = document.domain; // gives the domain name(local host(127.0.0.1/localhost) while development)
output = document.URL; // gives the entire URL in the URL bar.
output = document.characterSet; // gives the charset used for the document/html page
output = document.contentType; // text/html

output = document.forms; // gives the HTML Collection of the forms in the document.
output = document.forms[0]; // gives the first form
output = document.forms[0].classList; // accessing specific attributes on the element.
output = document.forms[0].method; // Get the method set on the form, by default it is "GET".

document.forms[0].id = 'new-id'; // set the id on the element.

output = document.links; // gives an HTML Collection containing all the links in the document.
document.links[0].id = 'google-link';
document.links[0].className = 'google-class class2'; // setting 2 classes on the element.
output = document.links[0].classList; // return a DOM token list containing, all the classes on that element.

output = document.images; // gives an HTML collection of images in the document.
output = document.images[0].src; // get the src attribute of an image in the collection.

/************************ This is not a recommended way to select forms, images, links in the document ************************* */
// We should use specific selector methods to select elements on the page.

// HTML collection is not an array, so it doesn't have access to array methods,
// it has it's own methods in the prototype.

// Converting HTML collection to an array.
const forms = Array.from(document.forms);
output = forms; // Now, forms is an array and has access to array methods

console.log(output);

/****************************************] Select Elements on the page *************************************** */

/**************************** Selecting single element **************************** */
let x;

x = document.getElementById('app-title'); //  Select an element by ID(unique per element).
x = document.getElementById('app-title').id; // Get the ID attribute of an element.

// Get attributes using getAttribute function, it selects elements based on the attribute name(eg:-class not className)
x = document.getElementById('app-title').getAttribute('class');

// Set attributes
document.getElementById('app-title').className = 'app-title-class';
x = document.getElementById('app-title').className;

// Setting attribute using setAttribute method.
document.getElementById('app-title').setAttribute('class', 'app-title-class2');
x = document.getElementById('app-title').getAttribute('class');

// Most of the time we'll be updating the content/setting attributes by selecting the elements.
const title = document.getElementById('app-title');
x = title.textContent; // textContent give the text content of the node.
title.textContent = 'Hello World'; // Setting the textContent of an element, textContent -> do not preserve styles, but preserve formatting
title.innerText = 'Hello Again'; // Setting the innerText of an element, innerText -> do preserve styles, but ignore formatting(spaces, /n)
title.innerHTML = '<strong>Shopping List</strong>';

console.log(x);

/** https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText  */

// Change CSS Styles -> Add dynamic styles, static styles will be added in the stylesheet itself.
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '5px';

/********************************** Selecting elements using querySelector ************************************ */

// It allows selecting an element using CSS selectors,
// and it selects the first element that matches the query.

let y;

y = document.querySelector('h1'); // allows selecting an element, using CSS selectors.
y = document.querySelector('#app-title'); // selecting the same element by id.
y = document.querySelector('input[type="text"]'); // allows selecting element using attribute selector.
y = document.querySelector('li:nth-child(3)');
y = document.querySelector('li:nth-child(3)').innerText;

const secondItem = document.querySelector('li:nth-child(3) button');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';
secondItem.style.textDecoration = 'underline';
secondItem.style.fontSize = '1em';

// Use methods on other elements
const list = document.querySelector('ul'); // querySelector can be on any element.
console.log(list, typeof list);
console.log(list.children); // gives all the children of the element in a HTML Collection.

const listItem = list.querySelector('li'); // It selects the first item that matches the query.
console.log(listItem);
console.log(y);

/**************************** Selecting multiple elements **************************** */

// Select mutiple elements using querySelectorAll

let z;

const listItems = document.querySelectorAll('li'); // returns all li nodes in a node list.
z = listItems;
console.log('---- NODE LIST ----');
// Node List is also an array-like object like an HTML Collection, it has different methods than array and HTML Collection.
console.log(z);
// Node List Methods -> https://developer.mozilla.org/en-US/docs/Web/API/NodeList
console.log(z.length); // length of the node list.
console.log(z.item(2)); // returns a list item at a specific index.
console.log(z.entries()); // returns an iterator to iterate oven the node list with key, value.
for (const [key, value] of z.entries()) {
  console.log(key, value);
}
for (const key of z.keys()) {
  // keys() also returns an iterator to loop over the keys() array.
  console.log(key);
}
for (const value of z.values()) {
  // values() also returns an iterator to loop over the keys() array.
  console.log(value);
}

z.forEach((item, key) => {
  // forEach method allows to iterate over the node List.
  console.log(key, item);
});

console.log(z.item(1).innerText); // get the text of the element.
// Change color of all items in the node list.
z.forEach((item, key) => {
  item.style.color = 'blue';
  if (key === 1) {
    item.remove();
  }
  if (key === 0) {
    item.innerHTML = `<button class="remove-item btn-link text-red">
    Oranges<i class="fas fa-solid fa-circle-xmark"></i>
  </button>`;
  }
});

// Selecting elements by classname

// NOTE:- getElement returns HTML Collection, querySelector returns Node List.

const listItems2 = document.getElementsByClassName('item'); // returns an HTML Collection.
console.log(listItems2);
/*
listItems2.forEach((item, key) => {
  // forEach function doesn't exist on HTML collection.
//    to iterator over the elements of the collection, we need to convert it to an array.
});
*/

const listItemsArray = Array.from(listItems2);
console.log(listItemsArray);

// Get Elements by tag name
const listItems3 = document.getElementsByTagName('li');
const listItemsArray2 = Array.from(listItems3);
console.log(listItemsArray2);
