const root = document.querySelector('.root');
const joke = document.querySelector('.joke');
const btn = document.querySelector('.btn');

function generateJoke() {
  joke.textContent = 'Loading...';
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState === 4) {
      if (this.status === 200) {
        const { value } = JSON.parse(this.responseText);
        joke.textContent = value;
      } else {
        joke.textContent = 'Something went wrong';
      }
    }
  };

  xhr.send();
}

btn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
