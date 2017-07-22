function chunkArrayInGroups(arr, size) {
  let arrays = arr.length/size;
  let output = [];
  let index = 0;
  let maximum = 0;

  for(let i = 0; i < arrays; i++){
    if(index + size > arr.length){
        maximum = index+size - ((index + size) - arr.length)
    }else{
        maximum = index + size;
    }
    let new_array = arr.slice(index, maximum);
    index += size;
    output.push(new_array);
  }
  return output;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)