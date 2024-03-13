function solution(nums) {
  const numbers = [];
  let count = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let k = i + 1; k < nums.length - 1; k++) {
      for (let j = k + 1; j < nums.length; j++) {
        numbers.push(nums[i] + nums[k] + nums[j]);
      }
    }
  }
  const array = uclid(Math.max(...numbers));
  console.log(array);
  numbers.forEach(num => {
    if (array[num]) count++;
  });
  return count;
}

function uclid(num) {
  const array = Array(num + 1).fill(true);
  array[0] = false;
  array[1] = false;
  for (let i = 2; i <= num; i++) {
    for (let k = 2; k <= Math.floor(num / i); k++) {
      array[i * k] = false;
    }
  }
  return array;
}
