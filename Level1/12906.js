function solution(arr) {
  const answer = [];
  let prev;
  for (let number of arr) {
    if (prev !== number) {
      answer.push(number);
      prev = number;
    }
  }
  return answer;
}
