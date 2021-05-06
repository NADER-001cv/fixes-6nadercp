
function solve(arr) {
  let sol = [];
  for (var i = 0; i < arr.length - 1; i++) {
    elem = arr[i];
    check = (current) => elem > current;
    if (arr.slice(i + 1).every(check)) {
      sol.push(arr[i]);
    }
  }

  sol.push(arr[arr.length - 1]);
  return sol;
}
console.log(solve([75, 47, 42, 56, 13, 55]));
