// Function Declaration
console.log(addDollarSign(10));
function addDollarSign(value) {
  // FDs are hoisted.
  return '$' + value;
}

// Function Expression
// console.log(addPlusSign(20)); Can't use FE here.
const addPlusSign = function (value) {
  // FEs are not hoisted, can't use them before creating.
  return '+' + value;
};

console.log(addPlusSign(20));
