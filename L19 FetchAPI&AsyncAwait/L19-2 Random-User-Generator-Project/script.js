const userContainer = document.querySelector('.user--container');
const userDetailsContainer = document.querySelector(
  '.user--details--container'
);
const btn = document.querySelector('.btn');

function showLoadingMessage() {
  const p = document.createElement('p');
  p.textContent = 'Loading...';
  p.style.flexGrow = 1;
  p.style.display = 'flex';
  p.style.alignItems = 'center';
  p.style.justifyContent = 'center';
  p.style.color = 'white';
  document.querySelector('.user--container').lastElementChild.replaceWith(p);
  window.removeEventListener('load', showLoadingMessage);
}

function showErrorMessage(err) {
  const p = document.createElement('p');
  p.textContent = err;
  p.style.flexGrow = 1;
  p.style.display = 'flex';
  p.style.alignItems = 'center';
  p.style.justifyContent = 'center';
  p.style.color = 'red';
  document.querySelector('.user--container').lastElementChild.replaceWith(p);
}

function displayUser(user) {
  const { name, email, phone, location, dob, gender, picture } =
    user.results[0];
  userDetailsContainer.innerHTML = `
  <img src="${picture.large}" alt="user" />
        <div class="user--info">
          <p>
            <span>Name: </span>
            <span>${name.first} ${name.last}</span>
          </p>
          <p>
            <span>Email </span>
            <span>${email}</span>
          </p>
          <p>
            <span>Phone: </span>
            <span>${phone}</span>
          </p>
          <p>
            <span>Location: </span>
            <span>${location.state} ${location.country}</span>
          </p>
          <p>
            <span>Age: </span>
            <span>${dob.age}</span>
          </p>
        </div>
  `;
  userContainer.replaceChild(
    userDetailsContainer,
    userContainer.lastElementChild
  );
  document.body.style.backgroundColor = gender === 'male' ? 'skyblue' : 'pink';
}

function generateUser() {
  showLoadingMessage();
  fetch('https://randomuser.me/api')
    .then((res) => {
      if (!res.ok) throw new Error('Request Failed');
      return res.json();
    })
    .then((userData) => {
      const { gender } = userData.results[0];
      displayUser(userData);
      document.body.style.backgroundColor =
        gender === 'male' ? 'skyblue' : 'pink';
    })
    .catch((err) => {
      showErrorMessage(err);
    });
}
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundColor = 'rebeccapurple';
});
window.addEventListener('load', showLoadingMessage);
btn.addEventListener('click', generateUser);
generateUser();
