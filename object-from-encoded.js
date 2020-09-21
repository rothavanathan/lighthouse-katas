const urlDecode = function(text) {
  // Put your solution here
  let keyValuePairs = [];
  const propertyArrays = [];
  const decodedObject = {};
  let decodedValue;
  //get rid of &
  keyValuePairs = text.includes("&") ? text.split("&"): [text]; 
  //loop over pairs
  keyValuePairs.forEach(keyValuePair => {
    //for each pair, separate pairs into [key, value]
    propertyArrays.push(keyValuePair.split("="))
  })
  //for each array becomes [0] key = [1] value
  propertyArrays.forEach(pair => {
    if (pair[1].includes("%20")){
      decodedValue = pair[1].split("%20").join(" ");
    } else {
      decodedValue = pair[1]
    }
    decodedObject[pair[0]] = decodedValue;
  })
  return decodedObject;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
