
function truncateString(str, num) {
    console.log(str = str.substring(0, num).append('...'));
  return str.length < num ? str = str.substring(0, num).append('...') : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 2);
