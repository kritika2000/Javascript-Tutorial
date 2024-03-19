// Select elements
/*
const keys = document.querySelectorAll('.key span');
const onKeyDown = (e) => {
  const key = e.key;
  const keyCode = e.keyCode;
  const code = e.code;
  keys.item(0).textContent = e.key === ' ' ? 'space' : e.key;
  keys.item(1).textContent = e.keyCode;
  keys.item(2).textContent = e.code;
};
*/

const insert = document.querySelector('#insert');
const p = document.createElement('p');
p.textContent = 'Press Some Key';
if (insert.children.length === 0) {
  insert.appendChild(p);
}

const onKeyDown = (e) => {
  insert.innerHTML = '';
  const keyCodes = {
    'e.key': e.key === ' ' ? 'space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };
  for (const key in keyCodes) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const small = document.createElement('small');
    div.setAttribute('class', 'key');
    span.textContent = keyCodes[key];
    small.textContent = key;
    div.appendChild(span);
    div.appendChild(small);
    insert.appendChild(div);
  }
};
window.addEventListener('keydown', onKeyDown);
