const squareCode = function(message) {
  // Put your solution here
  let newMessage = "";
  //strip message of spaces
  let runOnMessage = message.split(" ").join("");
  let i = 0;
  let columns = Math.ceil(Math.sqrt(runOnMessage.length));
  console.log(columns)
  let rows = Math.floor(runOnMessage.length / columns);
  //figure out the matrix here
  return newMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
