

function createPhoneNumber(numbers) {
  var num_tel = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    num_tel = num_tel.replace("x", numbers[i]);
  }

  return num_tel;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));