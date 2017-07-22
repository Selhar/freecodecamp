function bouncer(arr) {
  return arr.filter((item) => item ? true : false);
}

bouncer([7, "ate", "", false, 9]);