function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let k = i; k <= n; k++) {
      sum += k;
      if (sum === n) {
        answer += 1;
        break;
      }
      if (sum > n) {
        break;
      }
    }
  }
  return answer;
}
