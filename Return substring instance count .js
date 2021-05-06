

function countOverlap(reg, matched, fullText, searchText) {
  let count = matched.length;
  for (let i = 0, l = matched.length; i < l; i++) {
    const start = fullText.indexOf(matched[0]) + 1;
    const end = start + searchText.length;
    const sub = fullText.slice(start, end + 1);

    if (reg.test(sub)) {
      count += 1;
    }

    fullText = fullText.slice(start + searchText.length);
  }
  return count;
}

function searchSubstr(fullText, searchText, allowOverlap = true) {
  if (!searchText) {
    return 0;
  }

  const reg = new RegExp(searchText, "g");
  const matched = fullText.match(reg);

  return allowOverlap
    ? matched
      ? countOverlap(reg, matched, fullText, searchText)
      : 0
    : matched
    ? matched.length
    : 0;
}
