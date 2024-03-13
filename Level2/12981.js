function solution(n, words) {
  const prevWords = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (prevWords.at(-1).at(-1) !== words.at(i).at(0)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    if (prevWords.includes(words.at(i))) return [(i % n) + 1, Math.floor(i / n) + 1];
    prevWords.push(words.at(i));
  }
  return [0, 0];
}

const n = 3;
const words = ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'];

solution(n, words);
