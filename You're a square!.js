

var isSquare = function (n) {
  ssq = false;
  if (n < 0) {
    return ssq;
  } else if (Number.isInteger(Math.sqrt(n))) {
    ssq = true;
  } else {
    ssq = false;
  }

  return ssq;
};

console.log(isSquare(5));
