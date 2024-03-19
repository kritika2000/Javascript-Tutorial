const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  console.log(itemList.classList); // returns all the classes in a DOM token list which are separated by space.
  itemList.classList.add('dark');
  itemList.classList.forEach((c) => {
    console.log(c);
  });
  //   text.classList.add('dark');
  //   text.classList.remove('card');

  // Toggle Classes
  text.classList.toggle('dark'); // Add the class, if the class doesn't exist and remove it otherwise.

  // Replace card class with dark
  text.classList.replace('card', 'dark');

  // Change Style
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = index === 2 && 'blue';
  });
}

document.querySelector('button').onclick = run;
