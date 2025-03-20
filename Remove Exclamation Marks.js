function removeExclamationMarks(s) {
  return s
    .split("")
    .map((i) => (i === "!" ? "" : i))
    .join("");

  // or return s.split("!").join("")
}
console.log(removeExclamationMarks("Hello World!")); // "Hello World"
