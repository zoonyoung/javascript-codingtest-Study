function solution(name, yearning, photo) {
  const answer = [];
  photo.forEach(pic => {
    let score = 0;
    pic.forEach(n => {
      const index = name.indexOf(n);
      if (index !== -1) score += yearning[index];
    });
    answer.push(score);
  });
  return answer;
}
