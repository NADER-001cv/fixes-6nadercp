

function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

/* **********

Second:

pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' '); */
