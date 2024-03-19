const people = [
  {
    name: 'Jamie Williams',
    age: 26,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    looking: 'Female looking for male',
  },
  {
    name: 'John Smith',
    age: 35,
    gender: 'male',
    location: 'New York, NY',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    looking: 'Male looking for female',
  },
  {
    name: 'Bob Johnson',
    age: 42,
    gender: 'male',
    location: 'Chicago, IL',
    imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    looking: 'Male looking for male',
  },
  {
    name: 'Shannon Jackson',
    age: 29,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    looking: 'Female looking for female',
  },
];

const container = document.querySelector('.container');
const img = document.querySelector('img');
const profileInfo = document.querySelector('.profile-info');
const nextBtn = document.querySelector('#next');

function* createPeopleIterator() {
  let index = 0;
  while (true) {
    yield people[index++ % people.length];
  }
}

const iterator = createPeopleIterator();
nextBtn.addEventListener('click', () => {
  const { name, age, imageURL, location, looking } = iterator.next().value;
  img.setAttribute('src', imageURL);
  profileInfo.children[0].textContent = name;
  profileInfo.children[1].textContent = `${age} Years Old`;
  profileInfo.children[2].textContent = location;
  profileInfo.children[3].textContent = looking;
});
