

function highAndLow(numbers) {
  arr = numbers.split(" ");
  arr2 = arr.sort();
  res = Math.max(...arr2) + " " + Math.min(...arr2);
  return res;
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
