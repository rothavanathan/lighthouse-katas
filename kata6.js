const whereCanIPark = function (spots, vehicle) {
    // Code here!
    //depending on vehicle type check spots for availability
    if(vehicle === "regular"){
        for (let row = 0; row < spots.length; row++){
            for (let spot = 0; spot < spots[row].length; spot++){
                if (spots[row][spot] === "R") {
                    return [spot, row];
                }
            }
        }
        return false;
    }
    if(vehicle === "small"){
        for (let row = 0; row < spots.length; row++){
            for (let spot = 0; spot < spots[row].length; spot++){
                if (spots[row][spot] === "R" || spots[row][spot] === "S") {
                    return [spot, row];
                }
            }
        }
        return false;
    }
    if(vehicle === "motorcycle"){
        for (let row = 0; row < spots.length; row++){
            for (let spot = 0; spot < spots[row].length; spot++){
                if (spots[row][spot] === "R" || spots[row][spot] === "S"  || spots[row][spot] === "M" ) {
                    return [spot, row];
                }
            }
        }
        return false;
    }
  };
    
  console.log(whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
      ['s', 'M', 's', 'S', 'r', 'M'], // 1
      ['s', 'M', 's', 'S', 'r', 'm'], // 2
      ['S', 'r', 's', 'm', 'r', 'M'], // 3
      ['S', 'r', 's', 'm', 'r', 'M'], // 4
      ['S', 'r', 'S', 'M', 'M', 'S']  // 5
    ],
    'regular'
  ));
  
  console.log(whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M']
    ],
    'small'
  ));
  
  console.log(whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S']
    ],
    'motorcycle'
  ))
  