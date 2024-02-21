function solution(s) {
  let word = '';
  answer = [];
  for (let i of s) {
    word += i;
    const n = Number(i);
    if (Number.isInteger(n)) {
      answer.push(Number(i));
      word = '';
    }
    const res = wordToNumber(word);
    if (Number.isInteger(res)) {
      answer.push(res);
      word = '';
    }
  }
  return Number(answer.join(''));
}

function wordToNumber(word) {
  switch (word) {
    case 'zero':
      return 0;

    case 'one':
      return 1;

    case 'two':
      return 2;

    case 'three':
      return 3;

    case 'four':
      return 4;

    case 'five':
      return 5;

    case 'six':
      return 6;

    case 'seven':
      return 7;

    case 'eight':
      return 8;

    case 'nine':
      return 9;

    default:
      return false;
  }
}
