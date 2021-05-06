

function likes(names) {
  like = "";
  switch (names.length) {
    case 0:
      like = "no one likes this";
      break;
    case 1:
      like = `${names[0]} likes this`;
      break;
    case 2:
      like = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      like = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      like = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
      break;
  }

  return like;
}

console.log(likes(['safwan', 'fayrouz' , 'rami', 'yassmin']));
