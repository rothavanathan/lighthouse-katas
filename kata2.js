const conditionalSum = function(values, condition) {
  // Your code here
  const goodValues = [];
  values.forEach(function(value){ 
    if (condition === "even" && value % 2 === 0){
      goodValues.push(value);
    } else if (condition === "odd"  && value % 2 === 1){
      goodValues.push(value);
    }
  })
  let total = 0;
  goodValues.forEach(goodValue => total += goodValue)
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
