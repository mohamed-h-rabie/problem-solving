function reduce(arr) {
  // return arr.reduce((acc , curr)=>acc*curr)
  return eval(arr.join("*"));
}
console.log(reduce([1,5,6,3,8,9]))