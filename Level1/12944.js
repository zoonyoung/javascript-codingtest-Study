//평균 구하기
function solution(arr) {
  let sum = 0;
  for (let i of arr) {
      sum += i;
  }
  return sum / arr.length;
}