const multiplicationTable = function(maxValue) {
    // Your code here
    let tableString = ""
    for (let y = 0; y < maxValue; y++){
        for (let x = 0; x < maxValue; x++){
            let product = (x + 1) * (y + 1);
            tableString += String(product) + " "
        }
        tableString += "\n";
    }
    return tableString;
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));
  