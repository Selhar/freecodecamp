function sumAll(arr) {
  arr.sort();
  let sum = 0;
  for(let i = arr[0]; i<= arr[-1]; i++){
    sum += arr[i];
  }
}

console.log(sumAll([1, 4]));