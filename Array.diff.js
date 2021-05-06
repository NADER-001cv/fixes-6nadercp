

function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        a.splice(i, 1);
      }
    }
  }

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[j] == b[i]) {
        a.splice(j, 1);
      }
    }
  }

  return a;
}

