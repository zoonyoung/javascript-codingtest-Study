//문자열 내 p와 y의 개수
function solution(s){
  let str = s.toUpperCase();
  let count = 0;
  for (let i of str) {
      if (i === 'P') {
          count++;
      }
      if (i === 'Y') {
          count--;
      }
  }
  if(count === 0) {
      return true;
  }
  return false;
}