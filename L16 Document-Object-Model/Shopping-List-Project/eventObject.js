/**
 * Whenever a listener is attached to an element, the callback accepts an event object,
 * that has some information of the element which fired the event.
 * target -> The element that triggered the event
 * currentTarget -> The element that the event listener is attached to.
 * type -> the type of the event triggered.
 * timeStamp -> The time when the event was triggered.
 * clientX -> The x position of the mouse cursor relative to the window.
 * clientY -> the y position of the mouse cursor relative to the window.
 * offsetX -> The x position of the mouse cursor relative to the element.
 * offsetY -> The y position of the mouse click relative to the element.
 * pageX -> The x position of the mouse cursor relative to the page.
 * pageY -> The y position of the mouse cursor relative to the page.
 * screenX -> The x position of the mouse cursor relative to the screen.
 * screenY -> The y position of the mouse cursor relative to the screen.
 */

const logo = document.querySelector('img');

logo.addEventListener('click', function (event) {
  console.log(event);
  console.log(event.target); // returns the element, that triggered the event(img).
  console.log(event.currentTarget); // returns the element that has the listener attached to.(img in this case). Diffrence comes in case of event bubbling.
  event.target.style.backgroundColor = 'black';
  console.log(event.type); // click
  console.log(event.timeStamp);
  console.log(event.clientX, event.clientY); // gives the distance of the cursor from left of the window on the x-axis and top of the window on y-axis;
  console.log(event.offsetX, event.offsetY); // this gives the distance of the cursor from left of the element on x-axis and top of the element on y-axis.
  console.log(event.pageX, event.pageY); // same as client, but it includes the distance from hidden parts(by scrolling)
  console.log(event.screenX, event.screenY); // This is relative to entire screen of the device, outside the view port
});

logo.addEventListener('drag', function (event) {
  document.querySelector(
    'h1'
  ).textContent = `X ${event.clientX} Y ${event.clientY}`;
});
/*
document.body.addEventListener('click', function (event) {
  console.log(event.target); // If a click an element on the page, that will be the target
  console.log(event.currentTarget); // body will be the current target always, even if some element inside the body is triggering the event.
});
*/

// event.preventDefault() method prevents the default behaviour of some elements(Eg: form submission, links always open the destination by default)
const link = document.querySelector('a');
link.addEventListener('click', function (event) {
  event.preventDefault(); // will not open the link now.
  // we can do other stuff rather going to the destination link.
  console.log('Link Clicked');
});
