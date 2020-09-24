const squareCode = function(message) {
  // Put your solution here
  let newMessage = "";
  //strip message of spaces
  let runOnMessage = message.split(" ").join("");
  let i = 0;
  let columns = Math.ceil(Math.sqrt(runOnMessage.length));
  let rows = Math.ceil(Math.sqrt(runOnMessage.length));
  //for each row
  for (let r = 0; r < rows ; r++){
    //we know each row starts with the equal indexed letter
    newMessage += runOnMessage[r]
    //then we want to add the character columns to initial character index n number of times...
    for (let c = 1; c < columns; c++){
      //... if it's within the message length
      if (((r+1) + (c * rows)) <= runOnMessage.length){
        newMessage += runOnMessage[(r + (c * rows))]
      }
    }
    //add newline before next row
    newMessage += " "
  }
  return newMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
