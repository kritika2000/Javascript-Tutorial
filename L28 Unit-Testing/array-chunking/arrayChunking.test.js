// Replace expect with assert.
const assert = require('assert');
const chunk = require('./arrayChunking');

describe('Array Chunking', () => {
  it('should create chunks of specific size', () => {
    assert.deepEqual(chunk([1, 2, 3, 4, 5, 6], 2), [
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    assert.deepEqual(chunk([1, 2, 3, 4, 5, 6, 7], 3), [
      [1, 2, 3],
      [4, 5, 6],
      [7],
    ]);
    assert.deepEqual(chunk([1, 2, 3, 4, 5, 6], 7), [[1, 2, 3, 4, 5, 6]]);
    assert.deepEqual(chunk([1, 2, 3, 4, 5, 6], 1), [
      [1],
      [2],
      [3],
      [4],
      [5],
      [6],
    ]);
    assert.deepEqual(chunk([1, 2, 3, 4, 5, 6], 0), []);
  });
});
