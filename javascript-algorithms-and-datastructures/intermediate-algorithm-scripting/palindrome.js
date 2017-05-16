function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  let reverse = str.split('').reverse().join('');
  return str == reverse;
}

palindrome("_eye");
