const repeatNumbers = function(data) {
    // Put your solution here
    let string = ""
    data.forEach(couplet => {
        for (let i = 0; i < couplet[1]; i++){
            string += String(couplet[0])
        }
    })
    return string
  };
  
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
  