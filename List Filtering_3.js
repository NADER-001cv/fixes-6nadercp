


function filter_list(l) {
  arr = l.filter(val => typeof val == "number");

  return arr;
}

console.log(filter_list([1, 2, "aasf", 1, "123", 123]));
