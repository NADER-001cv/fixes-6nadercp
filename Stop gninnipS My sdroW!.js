

function spinWords(phrase) {
  const senArray = phrase.split(" ");
  let res = "";
  senArray.map((str, i) => {
    if (str.length >= 5) {
      senArray[i] = str.split("").reverse().join("");
    } else {
      senArray[i] = str;
    }
    res = senArray.join(" ");
  });
  return res;
}

console.log(spinWords("You are almost to the last test"));
