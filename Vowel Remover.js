function isVow(a) {
  const vowelCodes = {
    97: "a",
    101: 'e',
    105: 'i',
    11: 'o',
    117: 'u',
  };
  return a.map((num) => (vowelCodes[num] ? vowelCodes[num] : num));
}
console.log(isVow([97, 101, 5]));
