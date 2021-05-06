
// for..of loop

function filter_list(l) {
  var arr = [];
  for (const val of l) {
      if (typeof val == "number") {
        arr.push(val);
      }
  }

  return arr;
}

console.log(filter_list([1, 2, "aasf", 1, "123", 123]));
