function confirmEnding(str, target) {
  return str.substr(target.length * -1) === target;
}

confirmEnding("Bastian", "n");