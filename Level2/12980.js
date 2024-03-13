function solution(n) {
  let num = n;
  let answer = 1;
  while (num > 1) {
    if (num % 2 !== 0) {
      answer += 1;
      num = num - 1;
    }
    num = num / 2;
  }

  return answer;
}
