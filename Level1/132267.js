function solution(a, b, n) {
  let cola = n;
  let answer = 0;
  while (cola >= a) {
    const returnCola = Math.floor(cola / a) * b;
    answer += returnCola;
    cola = returnCola + (cola % a);
  }
  return answer;
}
