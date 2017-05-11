function repeatStringNumTimes(str, num) {
  return num > 0 ? new Array(num +1).join(str) : '';
}

repeatStringNumTimes("abc", 3);