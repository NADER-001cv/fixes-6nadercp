

function isTriangle(a, b, c) {
    let sum = a + b + c;
    let max = Math.max(a, b, c);
    if (sum - max >= max) {
      return true;
    }
  return false;
}

console.log(isTriangle(7,2,2));
