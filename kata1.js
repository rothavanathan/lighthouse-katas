const sumLargestNumbers = function(data) {
  // Put your solution here
  //array to store largest numbers
  const largestNumbers = [];
  //add first number of data
  largestNumbers.push(data[0]);
  //if second data is bigger it should be first in array
  data[1] > data [0] ? largestNumbers.unshift(data[1]): largestNumbers.push(data[1]);
  //if data has more than two numbers
  if (data.length > 2) {
    //check each number
    for (let i = 2; i < data.length; i++){
      //if number is bigger than data[0]
      if (data[i] > largestNumbers [0]){
        //put new number first and pop off the smallest
        largestNumbers.unshift(data[i]);
        largestNumbers.pop()
      } else if (data[i] > largestNumbers[1]){
        //pop off the smallest then add new to end
        largestNumbers.pop()
        largestNumbers.push(data[i]);
      }
    }
  }
  return largestNumbers[0] + largestNumbers[1]
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
