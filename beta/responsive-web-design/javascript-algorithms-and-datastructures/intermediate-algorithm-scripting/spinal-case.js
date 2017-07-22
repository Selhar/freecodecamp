function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

spinalCase('This Is Spinal Tap');
