function largestOfFour(arr) {
 let output = [];
   for(let item of arr)
     output.push(Math.max.apply(output, item));
  return output;
}