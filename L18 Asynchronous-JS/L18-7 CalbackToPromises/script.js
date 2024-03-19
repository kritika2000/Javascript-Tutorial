const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

/*
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback(); // It will run only after the post is pushed to the posts array
  }, 1000);
}

function getPosts() {
  console.log(posts); // original posts only, if not called as callback
  setTimeout(() => {
    console.log(posts); // added post
    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    }); // not an async callback
  }, 1000);
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
*/

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      !error
        ? (posts.push(post), resolve(posts))
        : reject("Couldn't create post");
    }, 1000);
  });
}

function getPosts(posts) {
  posts.forEach((post) => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
    document.querySelector('#posts').appendChild(div);
  });
}

function showError(error) {
  const h3 = document.createElement('h3');
  h3.innerHTML = `<strong>${error}</strong>`;
  document.getElementById('posts').appendChild(h3);
}
/*
createPost({ title: 'Post Three', body: 'This is post three' })
  .then((posts) => {
    getPosts(posts);
    // Whatever is returned from this then method can be accessed in the next then method
    return posts;
  })
  .then((allPosts) => console.log(allPosts))
  .catch(showError);
*/
//Promise chaining
function fun1() {
  return new Promise((resolve, reject) => {
    console.log('Fun 1 Started');
    setTimeout(() => {
      resolve('Fun 1');
    }, 1000);
  });
}
function fun2() {
  return new Promise((resolve, reject) => {
    console.log('Fun 2 Started');
    setTimeout(() => {
      resolve('Fun 2');
    }, 1000);
  });
}

// Take it as, when some function is returning promise, it is handled by then
fun1()
  .then((data) => {
    console.log(data);
    return fun2(); // the promise returned by this method can be handled in next then method
  })
  .then((data) => console.log(data)); // when the above promise will get resolved, this will run.
