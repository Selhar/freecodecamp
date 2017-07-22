function titleCase(str) {
  let output = [];
  for(let item of str.split(' ')){
    item = item.toLowerCase();
    output.push(item[0].toUpperCase() + item.slice(1));
  }
  return output.join(' ');
}

titleCase("I'm a little tea pot");