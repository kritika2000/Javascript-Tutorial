/**
 * JS is sync at it's core, i.e. which executes code
 * from top to bottom.
 *
 * Event are async in JS.
 *
 * JS is single threaded, i.e. only one thread is
 * allocated to execute the JS file. But it does
 * support Async capabilities through Web APIs(setTimeout,
 * fetch, xhr etc.)
 *
 * JS sync nature is fine until some part of code takes a
 * long time execute and blocks the execution further.
 * We run JS asynchronously, there is some blocking code,
 * eg:- fetching data from server, reading a file synchronously
 * in Node JS.
 * Blocking code -> reading a file synchronously.
 * Non-Blocking code -> reading a file asynchronously.
 *
 * Web/Browser APIs -> https://www.educative.io/answers/what-are-browser-apis
 * Web APIs are not part of JS, these are provided by the browser
 * to run JS code out of JS execution context and once the task
 * is complete the the operation's callback is put in the callback queue by event loop
 * and when the call stack is empty, the code gets executed.
 *
 * DOM manipulation is synchronous, however, the browser's re-rendering
 * of the page in response to a DOM update is asynchronous.
 * This can give the illusion of an asynchronous DOM update,
 * they don't do any long-running stuff in the background
 * that would require notifying you when it is ready.
 * They directly manipulate the DOM tree. You can also
 * infer this from the fact that there are no callbacks
 * involved.
 */

/* This browser API would be taken out of the callstack and once the 
time is over, the callback will be put in the call back queue
and event loop will eventually put the callback into the stack
once it sees the call stack empty.
*/
/*
setTimeout(function () {
  changeText(); // runs after the sync console log statement.
}, 0);

console.log('Hello from global scope');
*/
function changeText() {
  document.querySelector('h1').textContent = 'Hello From Callback';
}

// setTimeout returns a timer, and we cancel it
const timerId = setTimeout(changeText, 3000); // after 3s it would change the text.
document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timerId);
  // On button click the timer will get cancelled, if clicked before 3s and won't run the callback.
  console.log('Timer Canceled');
});
