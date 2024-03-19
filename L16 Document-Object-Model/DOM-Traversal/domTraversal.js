/**
 * Every thing in the DOM is a node, there are different type of nodes:-
 * 1. Element node(1) -> they are actual elements like h1, p etc.
 * 2. text node(3) -> they are not elements, but represents text inside elements.
 * 3. comment node(8) -> comments we write in HTML file.
 * 4. attribute(2) -> attribute node.
 * 5. document node(9) -> document node, representing the top DOM node.
 */

/**
 * There is relationships between these DOM nodes -> parent-child, previousSibling, nextSiblings, children etc.
 */

let output;

// Get child elements from the parent.
const parent = document.querySelector('.parent');
output = parent;
output = parent.childNodes; // returns a node list containing child element nodes, including text nodes(/n is also a text node), comment nodes etc.
output = parent.children; // returns a HTML collection of element nodes only
output = parent.children[1]; // get the second child of the parent
output = parent.children[1].innerText;
output = parent.children[1].nodeName; // returns the name of the node.
output = parent.children[1].nodeType; // returns an integer which denotes a node type(element node -> 1, text node -> 2 etc)

parent.children[1].textContent = 'Child Two'; // updating the inner text of the element node.
parent.children[1].style.color = 'red';

output = parent.firstElementChild; // gives the first child which is the first element child node.

// Get parent element from a child.
const child = document.querySelector('.child');
// Difference between parentElement and parentNode -> https://www.geeksforgeeks.org/difference-between-dom-parentnode-and-parentelement-in-javascript/
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling Elements
const secondItem = document.querySelector('.parent *:nth-child(2)');
output = secondItem;

// Next Sibling
output = secondItem.nextElementSibling; // return next element node.
secondItem.nextElementSibling.style.color = 'green';

// Previous sibling
output = secondItem.previousElementSibling;
secondItem.previousElementSibling.style.color = 'gold';

/********************************* Nodes in DOM ***************************** */

const parent1 = document.querySelector('.parent');
output = parent1;
console.log(parent1.childNodes);

// Get child nodes of an element.
output = parent1.childNodes; // returns a node list conatining all type of nodes.
output = parent1.childNodes[0]; // returns the first node(text -> /n);
output = parent1.childNodes[0].textContent; // new line in the console.
output = parent1.childNodes[1].nodeName; // #(node name, eg: #text, #comment)
output = parent1.childNodes[3].innerHTML; // Child 1
output = parent1.childNodes[3].outerHTML; // <div class="child" style="color: gold;">Child 1</div> ,gives the HTML that surrounds the node.
output = parent1.childNodes[3].innerText = 'Child One';
parent1.childNodes[5].style.color = 'Red';
output = parent.firstChild; // give the first node(not necessarily be an element node).

// Parent Node
const child1 = document.querySelector('.child');
output = child1.parentNode;
child1.parentNode.style.backgroundColor = '#ccc';
child1.parentNode.style.padding = '10px';

// Siblings
const secondItem1 = document.querySelector('.child:nth-child(2)');
output = secondItem1;

// Next sibling node
output = secondItem1.nextSibling; // text node

// Previous sibling node
output = secondItem1.previousSibling; // text node

console.log(output);

const ul = document.querySelector('ul');
console.log(ul.childNodes);
