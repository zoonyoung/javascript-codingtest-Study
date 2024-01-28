//자연수 뒤집어 배열로 만들기
function solution(n) {
  let answer = [];
  let len = String(n).length - 1;
  for (let i = 0; i <= len; i++) {
      answer[i] = +String(n)[len - i];
  }
  return answer;
}