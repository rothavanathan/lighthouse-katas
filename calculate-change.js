const calculateChange = function(total, cash) {
    // Your code here
    let targetRemainder = cash - total;
    const change = {};
    if (targetRemainder / 2000 >= 1){
        change.twentyDollar = Math.floor(targetRemainder / 2000)
        targetRemainder -= (change.twentyDollar * 2000)
    }
    if (targetRemainder / 1000 >= 1){
        change.tenDollar = Math.floor(targetRemainder / 1000)
        targetRemainder -= (change.tenDollar * 1000)
    }
    if (targetRemainder / 500 >= 1){
        change.fiveDollar = Math.floor(targetRemainder / 500)
        targetRemainder -= (change.fiveDollar * 500)
    }
    if (targetRemainder / 200 >= 1){
        change.twoDollar = Math.floor(targetRemainder / 200)
        targetRemainder -= (change.twoDollar * 200)
    }
    if (targetRemainder / 100 >= 1){
        change.oneDollar = Math.floor(targetRemainder / 100)
        targetRemainder -= (change.oneDollar * 100)
    }
    if (targetRemainder / 25 >= 1){
        change.quarter = Math.floor(targetRemainder / 25)
        targetRemainder -= (change.quarter * 25)
    }
    if (targetRemainder / 10 >= 1){
        change.dime = Math.floor(targetRemainder / 10)
        targetRemainder -= (change.dime * 10)
    }
    if (targetRemainder / 5 >= 1){
        change.nickel = Math.floor(targetRemainder / 5)
        targetRemainder -= (change.nickel * 5)
    }
    if (targetRemainder / 1 >= 1){
        change.penny = Math.floor(targetRemainder / 1)
        targetRemainder -= (change.penny * 1)
    }
    return change;
  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));
  