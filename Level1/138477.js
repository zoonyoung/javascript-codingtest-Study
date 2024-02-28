function solution(k, score) {
  var answer = [];
  const compare = [];
  for (let i = 0; i < score.length; i++) {
    compare.push(score[i]);
    if (compare.length === k + 1) {
      compare.sort((a, b) => a - b);
      compare.shift();
    }
    answer.push(Math.min(...compare));
  }
  return answer;
}
