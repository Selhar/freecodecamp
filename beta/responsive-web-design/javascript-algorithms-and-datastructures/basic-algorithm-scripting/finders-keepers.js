
function findElement(arr, func) {
  for(let item of arr){
    if(func(item) === true)
       return item;
  }
  return undefined;
}
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) 
