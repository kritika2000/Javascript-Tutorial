// Get an element by id.
const main = document.getElementById('main');
console.log(main);
main.innerHTML = '<h1>Hello from main</h1>';

const mainQ = document.querySelector('#main h1');
mainQ.innerText = 'Hello';
