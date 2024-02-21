function solution(t, p) {
  var answer = 0;
  let tArray = [...t];
  let num = tArray.splice(0, p.length);
  let arrayIndex = tArray.length;
  for (let i = 0; i <= arrayIndex; i++) {
    if (num.join('') <= p) answer += 1;
    num.push(tArray.shift());
    num.shift();
  }
  return answer;
}
