

function getCount(str) {
  var vowelsCount = 0;
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] == "e" ||
      str[i] == "a" ||
      str[i] == "u" ||
      str[i] == "i" ||
      str[i] == "o"
    ) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

console.log(getCount("aliueooOOoo"));
