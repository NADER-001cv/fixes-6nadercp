

function disemvowel(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[aeoiu]/g) || str[i].match(/[AEIOU]/g)) {
      str = str.replace(str[i], "_");
    }
  }
  for (var j = 0; j < str.length; j++) {
    if ((str[j] = "_")) {
      str = str.replace("_", "");
    }
  }

  return str;
}

console.log(disemvowel("qshdazda / , qsdaadWU I the u O qa si oiu"));
