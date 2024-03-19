function reverseString(str) {
  let output = '';
  for (let c of str) {
    output = c + output;
  }
  return output;
}

module.exports = reverseString;
