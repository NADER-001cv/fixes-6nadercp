

function findOutlier(integers) {
  const oddArr = [];
  const evenArr = [];
  for (const val of integers) {
    if (val % 2 === 0) {
      evenArr.push(val);
    } else oddArr.push(val);
  }
  if (evenArr.length > oddArr.length) {
    return oddArr[0];
  } else return evenArr[0];
}

console.log(findOutlier([2, 6, 8, 10, 3]));
