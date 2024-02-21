function solution(num) {
  return Number(parseInt(num.toString(3).split('').reverse().join(''), 3).toString(10));
}
