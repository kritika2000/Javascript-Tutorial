/**
 * Callbacks are HOFs, a function(defination only) that is passed into another function.
 * Callbacks are not always async, eg:- forEach, map, filter methods etc.
 */

// toggle is called when the button is clicked
function toggle(e) {
  e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click', toggle);

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

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
// getPosts();

/**
 * Execution of creating and getting posts ->
 * 1. createPost() added to the call stack.
 * 2. It sees a Web API, so it pops the method from the stack
 *    and asks the web browser to run it.
 * 3. createPost() will be popped out of the stack, as there
 *    are not statements to run further.
 * 4. Once the time is over, the setTimeout callback will be put in the callback queue.
 * 5. getPosts() will be pushed to the stack, runs the first console statement
 *    (containing 2 posts only as new post has not been pushed yet).
 * 6. It sees a setTimeout function, so it will be popped of the stack
 *    and is handled by the browser and will be put in the callback queue
 *    once the time is over.
 * 7. getPosts() will be popped of the stack.
 * 8. Now, the call stack is empty, and depending on the timer of setTimeout callbacks,
 *   the functions will be put inside the call stack from callback queue.
 */

/* 
But if we want to run the getPosts() method only after the post is created,
we can pass it as callback to the createPost method and run after the post is created
*/
