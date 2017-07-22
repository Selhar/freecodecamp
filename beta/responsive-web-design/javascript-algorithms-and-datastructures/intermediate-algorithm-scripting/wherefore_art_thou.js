function whatIsInAName(collection, source) {
  let keys = Object.keys(source);

  return collection.filter((item) => {
    for(let key of keys)
      if(item[key] !== source[key] || !item.hasOwnProperty(key)) return false; 
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
