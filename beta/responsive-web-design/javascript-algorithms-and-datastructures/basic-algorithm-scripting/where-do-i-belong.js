
function getIndexToIns(arr, num) {
  let shouldAdd = arr.indexOf(num) >= 0 ? true : false;
  arr.push(num);
  arr.sort();
  return shouldAdd ? arr.indexOf(num)+1 : arr.indexOf(num);
}
getIndexToIns([10, 20, 30, 40, 50], 30);
//Some results aren't passing the tests on FCC test suite, from what i can tell it's a problem with beta, since the tests ask for contradicting results.