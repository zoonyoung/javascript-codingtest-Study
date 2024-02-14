function solution(n) {
  let countN = Number(n).toString(2).split('1').length;
  while (true) {
    const nextNumber = n + 1;
    if (countN === Number(nextNumber).toString(2).split('1').length) return nextNumber;
    n++;
  }
}
