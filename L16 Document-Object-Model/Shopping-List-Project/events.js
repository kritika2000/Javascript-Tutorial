/**
 * Events:- Actions or occurences that happen in the system you are programming,
 * which the system tells you about so your code can react to them.
 * Eg:- clicking on an element,
 * typing into a text field,
 * hovering over an element
 * submitting a form
 * closing a window
 * dragging an element
 * resizing an element etc.
 */

const clearBtn = document.querySelector('.clear--btn');

// Putting an event listener to an HTML file is not recommended.
function onClear() {
  console.log('Cleared');
}

// Creating event listeners using JS event listener.
/*clearBtn.onclick = function () {
  // This listener will replace the inline event listener.
  alert('Clear Items 2');
};
*/
// add event listener.
/* 
  addEventListener(typeOfEvent, callback(which executes when the event happens))
  We can have as many event listeners as we want using addEvent listeners.
*/
/*
clearBtn.addEventListener('click', (e) => {
  // This won't replace the inline event listener
  console.log('Button Click');
});

clearBtn.addEventListener('click', () => {
  console.log('Button Click 2');
});
*/
/*
setTimeout(() => {
  clearBtn.removeEventListener('click', onClear);
}, 5000);
*/
/*
setTimeout(() => {
  // Firing off event from the script.
  clearBtn.click(); // the script will run the function(event handler) automatically after 5 seconds.
}, 5000);
*/
/************************************************ Removing All List Items ********************************************** */

function clearItems() {
  // Clearing all list items.
  const list = document.querySelector('.item-list');
  const listItems = document.querySelectorAll('.item-list li');
  console.log(listItems);
  /*
    listItems.forEach((item) => {
    const parent = item.parentElement;
    parent.removeChild(item);
  });*/
  while (list.children.length) {
    list.firstChild.remove();
  }
}

clearBtn.addEventListener('click', clearItems);
