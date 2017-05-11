function sumAll(arr) {
  arr.sort();
  let sum = 0;
  for(let i = arr[0]; i<= arr[arr.length-1]; i++){
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);