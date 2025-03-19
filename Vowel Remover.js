function isVow(a) {
  const vowelCodes = {
    97: "a",
    101: "e",
    105: "i",
    11: "o",
    117: "u",
  };
  return a.map((num) => (vowelCodes[num] ? vowelCodes[num] : num));
}
console.log(isVow([97, 101, 5]));
function isVow(a) {
  const vowelCodes = {
    a: 97,
    e: 101,
    i: 105,
    o: 111,
    u: 117,
  };
  a.map((el, i) =>
    Object.values(vowelCodes).includes(el)
      ? (a[i] = Object.keys(vowelCodes).find((key) => vowelCodes[key] === el))
      : (a[i] = el)
  );
  return a;
}
console.log(isVow([97, 101, 5,5,7,6,2,4]));
