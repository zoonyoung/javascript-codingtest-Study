function solution(cards1, cards2, goal) {
  let answer = 'Yes';
  goal.forEach(word => {
    if (word === cards1.at(0)) cards1.shift();
    else if (word === cards2.at(0)) cards2.shift();
    else answer = 'No';
  });
  return answer;
}
