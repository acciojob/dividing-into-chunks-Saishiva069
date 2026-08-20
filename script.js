const divide = (arr, n) => {
  let result = [];
  let chunk = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let newSum = sum + arr[i];

    if (newSum <= n) {
      chunk.push(arr[i]);
      sum = newSum;
    } else {
      if (chunk.length > 0) {
        result.push(chunk);
      }

      chunk = [arr[i]];
      sum = arr[i];
    }
  }

  if (chunk.length > 0) {
    result.push(chunk);
  }

  return result;
};