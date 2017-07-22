function findLongestWord(str) {
  return str.split(' ').sort((a,b) => b.length - a.length).shift().length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");