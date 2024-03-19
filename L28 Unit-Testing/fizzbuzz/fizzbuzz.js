function fizzbuzz(num) {
  let str = '';
  if (num % 3 === 0) str += 'fizz';
  if (num % 5 === 0) str += 'buzz';
  return str.length ? str : num;
}

module.exports = fizzbuzz;
