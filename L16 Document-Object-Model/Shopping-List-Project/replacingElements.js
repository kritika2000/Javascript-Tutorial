// Replacing elements in the DOM
function replaceFirstItem() {
  const firstItem = document.querySelector('ul li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li); // replace the li tag with the new one.
}

replaceFirstItem();

// Using outerHTML
function replaceSecondItem() {
  const secondItem = document.querySelector('ul li:nth-child(2)');
  console.log(secondItem.outerHTML, secondItem.innerHTML);
  secondItem.outerHTML = '<li>Replaced Second</li>';
}

replaceSecondItem();

// Replace each item in the list
function replaceAllItems() {
  const listItems = document.querySelectorAll('ul li'); // returns node list for each item
  listItems.forEach((item, index) => {
    /*
    item.outerHTML = `<li>Replaced Item</li>`;
    // OR
    item.innerHTML = 'Replaced Item';
    */
    switch (index) {
      case 0:
        item.innerHTML = 'Replaced All - First';
        break;
      case 1:
        item.innerHTML = 'Replaced All Second';
        break;
      case 2:
        item.innerHTML = 'Replaced All Third';
        break;
      case 3:
        item.innerHTML = 'Replaced All Fourth';
        break;
    }
  });
}

replaceAllItems();

// Replace Child

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('h1');

  const h2 = document.createElement('h2');
  h2.textContent = 'Shopping List';
  // Selecting parent element, then replacing two child items:- parentNode.replaceChild(newItem, existingItem)
  header.replaceChild(h2, h1);
}
