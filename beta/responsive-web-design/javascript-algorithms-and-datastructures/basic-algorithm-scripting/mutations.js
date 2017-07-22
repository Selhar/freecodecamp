function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();
  let output = true;
  for(let letter of second){
      if(first.indexOf(letter) === -1){
          output = false;
      } 
  }
  return output;
}

mutation(["hello", "hey"]);