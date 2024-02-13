function solution(n) {
  answer = '수박'.repeat(Math.floor(n / 2));
  return n % 2 ? answer + '수' : answer;
}
