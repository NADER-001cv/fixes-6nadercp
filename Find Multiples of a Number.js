

function findMultiples(integer, limit) {
  if (integer > limit || integer < 0 || limit < 0) {
    return "Error : the integer must be less then the limit and both of them must be positive";
  }
  arr = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer == 0) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(findMultiples(6, 20));
