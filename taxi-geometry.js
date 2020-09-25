let currentDirection = "none";
let currentCoordinates = [0,0];

function changeDirection(turn) {
  if (currentDirection === "north"){
    switch(turn){
      case "right":
        currentDirection = "east";
        break;
      case "left":
        currentDirection = "west";
        break;
    }
  } else if (currentDirection === "east"){
    switch(turn){
      case "right":
        currentDirection = "south";
        break;
      case "left":
        currentDirection = "north";
        break;
    }
  } else if (currentDirection === "south"){
    switch(turn){
      case "right":
        currentDirection = "west";
        break;
      case "left":
        currentDirection = "east";
        break;
    }
  } else if (currentDirection === "west"){
    switch(turn){
      case "right":
        currentDirection = "north";
        break;
      case "left":
        currentDirection = "south";
        break;
    }
  } else if (currentDirection === "none"){
    switch(turn){
      case "right":
        currentDirection = "east";
        break;
      case "left":
        currentDirection = "north";
        break;
    }
  }
  return currentDirection;
}

function move(blocks) {
  switch(currentDirection) {
    case "north":
      currentCoordinates[1] += blocks;
      break;
    case "east":
      currentCoordinates[0] += blocks;
      break;
    case "south":
      currentCoordinates[1] -= blocks;
      break;
    case "west":
      currentCoordinates[0] -= blocks;
      break;
  }
  return currentCoordinates;
}

function formatCoordinates(twoNumArray) {
  return {east: twoNumArray[0], north: twoNumArray[1]}

}


const blocksAway = function(directions) {
  // Put your solution here
  currentCoordinates = [0,0];
  currentDirection = "none";
  for (let i = 0; i < directions.length; i++){
    if (i % 2 === 0) {
      changeDirection(directions[i]);
    } else {
      move(directions[i]);
    }
  }
  return formatCoordinates(currentCoordinates);
  
};


// console.log(changeDirection("right"))
// console.log(move(3))
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));