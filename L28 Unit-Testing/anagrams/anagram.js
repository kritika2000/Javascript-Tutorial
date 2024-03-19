function buildMap(str) {
  const map = new Map();
  for (const c of str) {
    if (map.has(c)) {
      const val = map.get(c);
      map.set(c, val + 1);
    } else {
      map.set(c, 1);
    }
  }
  return map;
}

function anagram(str1, str2) {
  const map1 = buildMap(str1);
  const map2 = buildMap(str2);
  if (map1.size !== map2.size) return false;
  for (const c of str1) {
    if (!map2.has(c) || map1.get(c) !== map2.get(c)) return false;
  }
  return true;
}

module.exports = anagram;
