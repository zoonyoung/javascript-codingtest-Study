function solution(brown, yellow) {
  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0) {
      const width = yellow / i;
      const height = i;
      const brownBlock = (width + height) * 2 + 4;
      if (brownBlock === brown) {
        return [width + 2, height + 2];
      }
    }
  }
}
