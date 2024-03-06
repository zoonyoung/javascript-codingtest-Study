function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      if ((arr1[i] | arr2[i]) & (1 << (n - 1 - j))) {
        row += '#';
      } else {
        row += ' ';
      }
    }
    answer.push(row);
  }
  return answer;
}
