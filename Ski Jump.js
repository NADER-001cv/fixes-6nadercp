

function skiJump(mountain) {
  const top = mountain.length;
  const v = top * 1.5;
  const jump = ((top * v * 9) / 10).toFixed(2);
  if (jump < 10) {
    return `${jump} metres: He's crap!`;
  }
  if (jump < 25) {
    return `${jump} metres: He's ok!`;
  }
  if (jump < 50) {
    return `${jump} metres: He's flying!`;
  }
  if (jump >= 50) {
    return `${jump} metres: Gold!!`;
  }
}
