function solution(arr1, arr2) {
  var answer = [];
  arr1.forEach((arr, idx) => {
    let tmp = [];
    arr.forEach((ar, id) => {
      tmp.push(ar + arr2[idx][id]);
    });
    answer.push(tmp);
  });
  return answer;
}
