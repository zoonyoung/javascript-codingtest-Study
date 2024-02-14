function GCD(a, b) {
  if (a % b === 0) return b;
  return GCD(b, a % b);
}
function solution(n, m) {
  const gcd = GCD(n, m);
  return [gcd, (n * m) / gcd];
}
