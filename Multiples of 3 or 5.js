

function solution(number) {
  if (number < 0) {
    return 0;
  }
  var sum = 0;
  var arr = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }

  for (const val of arr) {
    sum += val;
  }
  return { arr, sum };
}

console.log(solution(16));
