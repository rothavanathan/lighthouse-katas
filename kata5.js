const urlEncode = function(text) {
    // Put your solution here
    let newText = "";
    for (let i = 0; i < text.length; i++){
        newText += (text[i] === " ") ? "%20": text[i];
    }
    return newText;
}
  console.log(urlEncode("Lighthouse Labs"));
  console.log(urlEncode(" Lighthouse Labs "));
  console.log(urlEncode("blue is greener than purple for sure"));
  