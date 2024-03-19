// &&, >=, <=, ||, !=
// && => if any value is false, the ans is false, otherwise true.
// || => if any one value is true, ans is true. if the first expression evaluates to true, the second expression will not be evaluated.

let a;

a = 10 && 20; // 20 -> since both are true, the ans will be the last evaluated expression.
a = 20 && 0; // 0
a = 10 || 20; // 10, 10 evaluates to true.
a = 10 || 0; // 10
a = 0 || 20; // 20
a = 0 || null || '' || undefined; // undefined, last one.

console.log(a);

const posts = ['Post One'];
posts.length > 0 && console.log(posts[0]); // Evaluates the last value that is true., if encountered false anywhere, it returns false.

// ??(Nullish Coalescing) -> Returns the right side operand when the left is null or undefined.

let c = 10 ?? 20;
c = 10 ?? null; // 10
c = null ?? 20; // 20
c = 0 ?? 34; // 0;

console.log(c);
