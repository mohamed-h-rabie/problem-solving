function getAverage(marks) {
  return Math.floor(
    marks.reduce((acc, curr, _, arr) => acc + curr, 0) / marks.length
  );
}
console.log(getAverage([1, 5, 87, 45, 8, 8]));
