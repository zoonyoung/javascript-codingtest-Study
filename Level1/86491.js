function solution(sizes) {
  sizes.forEach(arr => arr.sort((a, b) => b - a));
  let maxW = 0;
  let maxH = 0;
  sizes.forEach(arr => {
    if (arr[0] > maxW) maxW = arr[0];
    if (arr[1] > maxH) maxH = arr[1];
  });
  return maxW * maxH;
}
