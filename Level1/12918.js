function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  const RegEx = /[\d]/g;
  return s.replace(RegEx, '').length === 0 ? true : false;
}
