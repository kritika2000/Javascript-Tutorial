// We have two methods to remove elements -> remove(remove the element), removeChild(remove an element from some parent).

// Remove an element
function removeClearButton() {
  const clearBtn = document.querySelector('.clear--btn');
  // clearBtn.remove();  remove the item selected.
}

// removeClearButton();

// Remove child of a parent node.
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li); // remove li child item from parent.
}

// removeFirstItem();

// Remove an item from a parent
function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  let numItems = ul.children.length;
  if (itemNumber > numItems) {
    console.log('Item Number Exceeds Items Length!');
    return;
  }
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  // OR
  const listItems = document.querySelectorAll('ul li'); // return a node list.
  const item = listItems[itemNumber - 1];
  // ul.removeChild(li);
  ul.removeChild(item);
}

// removeItem(3);

const removeItem3 = (itemNumber) =>
  document.querySelectorAll('ul li')[itemNumber - 1].remove();

removeItem3(5);
