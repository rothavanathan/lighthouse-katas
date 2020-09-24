function generateBoard(whiteQueen, blackQueen) {
  const chessBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];
  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;
  return chessBoard;
}

function sameRow(chessBoard) {
  // checks for each row... 
  for (let r = 0; r < 8; r++) {
    //initialize our how many 1's count
    let count = 0;
    for (let i = 0; i < 8; i++){
      // check if each character is a "1"
      if (chessBoard[r][i] === 1){
        //if it's a one then our count incremenets
        count++;
      }
      //if our count hits 2 then we have a threat
      if (count === 2){
        return true;
      }
    }
  }
  return false;
}

function sameColumn(chessBoard){
  for (let i = 0; i < 8; i++){
    //initialize our how many 1's count
    let count = 0;
    for (let r = 0; r < 8; r++){
      // check if character in each row at index i is a "1"
      if (chessBoard[r][i] === 1){
        //if it's a one then our count incremenets
        count++;
      }
    }
      //if our count hits 2 then we have a threat
    if (count === 2){
        return true;
    }
  }
  return false;
}


function positiveDiagonalMax(coordinate){
  //want to check if we'll go off the chessboard either by going up a row or across a column
  let distanceToRightEdge = 7 - coordinate[1];
  let distanceToUpperEdge = coordinate[0];
  let distanceToLeftEdge = coordinate[1];
  let distanceToBottomEdge = 7 - coordinate[0];
  return [Math.min(distanceToRightEdge, distanceToUpperEdge), Math.min(distanceToLeftEdge, distanceToBottomEdge)]
}

function negativeDiagonalMax(coordinate){
  //want to check if we'll go off the chessboard either by going up a row or across a column
  let distanceToRightEdge = 7 - coordinate[1];
  let distanceToUpperEdge = coordinate[0];
  let distanceToLeftEdge = coordinate[1];
  let distanceToBottomEdge = 7 - coordinate[0];
  return [Math.min(distanceToRightEdge, distanceToBottomEdge), Math.min(distanceToLeftEdge, distanceToUpperEdge)]
}

function findFirstQueenCoordinates(chessBoard) {
  for (let r = 0; r < 8; r++){
    for (let c = 0; c < 8; c++){
      if (chessBoard[r][c] === 1){
        return [r,c]
      }
    }
  }
  return "No Queen on the board";
}

function checkPositiveDiagonal(chessBoard) {
  let queenPosition = findFirstQueenCoordinates(chessBoard);
  let howFar = positiveDiagonalMax(queenPosition);
  //check to the right
  for (let x = 1; x <= howFar[0]; x++){
    if (chessBoard[queenPosition[0]-x][queenPosition[1]+x]){
      return true;
    }
  }
  //check ro the left
  for (let y = 1; y <= howFar[1]; y++){
    if (chessBoard[queenPosition[0]+y][queenPosition[1]-y]){
      return true;
    }
  }
  return false;
}
  
function checkNegativeDiagonal(chessBoard) {
  let queenPosition = findFirstQueenCoordinates(chessBoard);
  let howFar = negativeDiagonalMax(queenPosition);
  //check to the right
  for (let x = 1; x <= howFar[0]; x++){
    if (chessBoard[queenPosition[0]+x][queenPosition[1]+x]){
      return true;
    }
  }
  //check ro the left
  for (let y = 1; y <= howFar[1]; y++){
    if (chessBoard[queenPosition[0]-y][queenPosition[1]-y]){
      return true;
    }
  }
  return false;
}


function queenThreat(chessBoard) {
  if (sameRow(chessBoard) || sameColumn(chessBoard) || checkPositiveDiagonal(chessBoard) || checkNegativeDiagonal(chessBoard)) {
    return true;
  } else {
    return false;
  }
  //ultimate function is to check if both queens are in a straight line with each other
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));