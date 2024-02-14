process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(' ');
  const a = Number(n[0]),
    b = Number(n[1]);
  answer = Array(b).fill('*'.repeat(a));
  console.log(answer.join('\n'));
});
