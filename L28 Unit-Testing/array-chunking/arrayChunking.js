function arrayChunk(arr, size) {
  let output = [];
  /*
  let startIndex = 0;
  while (startIndex < arr.length) {
    output.push(
      arr.slice(
        startIndex,
        startIndex + Math.min(size, arr.length - startIndex)
      )
    );
    startIndex += Math.min(size, arr.length - startIndex);
  }
  */
  if (size === 0) return [];
  for (elem of arr) {
    const lastChunk = output[output.length - 1];
    if (!lastChunk || lastChunk.length >= size) {
      output.push([elem]);
    } else {
      lastChunk.push(elem);
    }
  }
  return output;
}

module.exports = arrayChunk;
