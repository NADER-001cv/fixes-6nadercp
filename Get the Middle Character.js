
function getMiddle(s) {
  res = "";
  L = s.length;
  if (L % 2 == 0) {
    res = s[L / 2 - 1] + s[L / 2];
  } else res = s[Math.round(L / 2) - 1];
  return res;
}

console.log(getMiddle("testing"));
