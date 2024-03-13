function solution(a, b) {
  const month = {
    1: 31,
    2: 29,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let sum = 0;
  for (let i = 1; i < a; i++) sum += month[i];
  sum += b;
  return days[(sum - 1) % 7];
}
