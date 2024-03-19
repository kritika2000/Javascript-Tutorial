/**
 * DOM -> a tree like DS representing the HTML elements. Defines the relationship between the elements too.
 * DOM manipulation allows us to change elements(including styles) through JS using DOM API methods.
 * Window(has browser APIs, including the DOM) -> document(represents the DOM) -> html -> head/body.
 */

console.log(window.document);
/*
console.log(document.body); // give the body element and its content
console.log(document.body.innerHTML); // gives the content of the body element
console.log(document.body.innerText); // give only the text content of all elements inside the element.
*/

// Get all the links on the page
console.log(document.links); // Returns an iterable HTML collection.

//  Changing an element innerHTML
// document.body.innerHTML = '<h1>Hello World</h1>';

/**
 * document.write method clears everything from the DOM, and write the content to the DOM.
 * If the document.write method is used before the document has
 * loaded completely, then there is no need to call the document.open method.
 *
 * When the document is being read and parsed by the browser, if
 * there's a script element that calls document.write, the output of
 * document.write is inserted into the document at that point. Later,
 * though, once the page is fully loaded, if you use document.write,
 * it implicitly performs a document.open, which wipes out the page
 * and starts writing a new one from scratch.
 *
 * If the script is loaded asynchronously/deferred, then we need to specifically
 * call document.open method, to clear everything from the page and then write to it,
 * then call the close method also.
 * https://stackoverflow.com/questions/27854494/are-document-open-and-document-close-necessary
 * */
// document.open();
document.write('Hello From JS');
// document.close();
