const numberOfVowels = function(data) {
  // Put your solution here
  let count = 0;
  let vowels = ["a","e","i","o","u"]
  for (let c of data){
    if (vowels.indexOf(c) !== -1){
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));