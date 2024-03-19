const form = document.querySelector('.form');

function onSubmit(e) {
  e.preventDefault();
  console.log('Submit');
  const item = document.getElementById('item-input');
  const priorityInput = document.getElementById('priority-input');
  if (item.value === '' || priorityInput.value === '0') {
    alert('Please fill in all fields');
    return;
  }
  console.log(item.value, priorityInput.value);
}

function onSubmit2(e) {
  e.preventDefault();
  // Using form Data object.
  const formData = new FormData(form);
  console.log(formData);
  const item = formData.get('item'); // name of the input element.
  const priority = formData.get('priority');
  const entries = formData.entries(); // returns the iterator to loop over the form object properties.
  for (let [key, value] of entries) {
    console.log(key, value);
  }
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);
