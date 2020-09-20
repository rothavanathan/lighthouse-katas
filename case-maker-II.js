function camel(input) {
    let inputArray = input.split(" ");
    let camelString = "";
    for (let i = 0; i < inputArray.length; i++){
        if (i === 0) {
            camelString += inputArray[0];
        }
            camelString += (inputArray[i][0].toUpperCase() + inputArray[i].slice(1))
    }
    return camelString;
}

function pascal(input) {
    let inputArray = input.split(" ");
    let pascalString = "";
    for (let i = 0; i < inputArray.length; i++){
        pascalString += (inputArray[i][0].toUpperCase() + inputArray[i].slice(1))
    }
    return pascalString;
}

function snake(input) {
    let snakeString = "";
    for (let c of input){
        if (c === " "){
            snakeString += '_'
        } else {
            snakeString += c
        }
    }
    return snakeString;
}

function kebab(input) {
    let kebabString = "";
    for (let c of input){
        if (c === " "){
            kebabString += '-'
        } else {
            kebabString += c
        }
    }
    return kebabString;
}

function title(input) {
    let inputArray = input.split(" ");
    let titleString = "";
    for (let i = 0; i < inputArray.length; i++){
        if (i + 1 === inputArray.length){
            titleString += (inputArray[i][0].toUpperCase() + inputArray[i].slice(1));
        } else {
            titleString += ((inputArray[i][0].toUpperCase() + inputArray[i].slice(1)) + " "); 
        }
    }
    return titleString;
}

function vowel(input) {
    const vowels = ["a", "e", "i", "o", "u"]
    let vowelString = "";
    for (let c of input){
        if (vowels.indexOf(c) !== -1){
            vowelString += c.toUpperCase()
        } else {
            vowelString += c
        }
    }
    return vowelString;
}

function consonant(input) {
    const vowels = ["a", "e", "i", "o", "u"]
    let consonantString = "";
    for (let c of input){
        if (vowels.indexOf(c) === -1){
            consonantString += c.toUpperCase()
        } else {
            consonantString += c
        }
    }
    return consonantString;
}

function upper(input) {
    let upperString = "";
    for (let c of input){
        upperString += c.toUpperCase()
    }
    return upperString;
}

function lower(input) {
    let lowerString = "";
    for (let c of input){
        lowerString += c.toLowerCase()
    }
    return lowerString;
}

const makeCase = function(input, caseArray) {
    if (typeof caseArray === "String"){
        switch(caseArray){
            case "camel":
                camel(input);
                break;
            case "pascal":
                pascal(input);
                break;
            case "snake":
                snake(input);
                break;
            case "kebab":
                kebab(input);
                break;
            case "title":
                title(input);
                break;
            case "vowel":
                vowel(input);
                break;
            case "consonant":
                consonant(input);
                break;
            case "upper":
                upper(input);
                break;
            case "lower":
                lower(input);
                break;
        }
    }
    // Put your solution here
    //priority 
    //camel,pascal,snake,kebab,title

    //vowel,consonant

    //upper,lower
    

  }
  
  console.log(makeCase("this is a string", "camel"));
  console.log(makeCase("this is a string", "pascal"));
  console.log(makeCase("this is a string", "snake"));
  console.log(makeCase("this is a string", "kebab"));
  console.log(makeCase("this is a string", "title"));
  console.log(makeCase("this is a string", "vowel"));
  console.log(makeCase("this is a string", "consonant"));
  console.log(makeCase("this is a string", ["upper", "snake"]));
  