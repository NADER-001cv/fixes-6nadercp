function parseInt(string) {
var words = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};
var mult = {
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};

function parseInt(str) {
  return str.split(/ |-/).reduce(function (value, word) {
    if (words[word]) value += words[word];
    if (mult[word])
      value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  }, 0);
}}

console.log(parseInt("two hundred forty-six"));

/* ******************** Solution 2 *********************

function parseInt(string) {
  var map = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eigthteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  var multiMap = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };
  var result = 0,
    result2 = 0,
    multiply = 0;

  function getNumber(string) {
    var nArr = string.split("-");
    if (nArr.length > 1) {
      return map[nArr[0]] + map[nArr[1]];
    }
    return map[string];
  }

  string.split(" ").map(function (number) {
    if (multiMap[number]) {
      result *= multiMap[number];
      if (result >= 1000) {
        result2 = result;
        result = 0;
      }
    } else if (number != "and") {
      result += getNumber(number);
    }
  });
  return result + result2;
} */
