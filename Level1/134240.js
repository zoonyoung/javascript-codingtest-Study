function solution(food) {
  answer = [0];
  for (let i = food.length; i > 0; i--) {
    const count = Math.floor(food[i] / 2);
    if (count) {
      answer.push(String(i).repeat(count));
      answer.unshift(String(i).repeat(count));
    }
  }
  return answer.join('');
}
