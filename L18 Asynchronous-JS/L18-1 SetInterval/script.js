/**
 * Just like setTimeout, we have setInterval which runs sfter
 * every ms specified.
 * We can clear this interval also to stop getting executed.
 */

const colors = ['red', 'blue', 'green', 'yellow'];
let intervalId;

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

// starting an interval when start button is clicked.
document.querySelector('#start').addEventListener('click', () => {
  intervalId = setInterval(changeColor, 1000);
});

// stopping the interval when the clear interval button is clicked.
document
  .querySelector('#stop')
  .addEventListener('click', () => clearInterval(intervalId));
