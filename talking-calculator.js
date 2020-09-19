const talkingCalendar = function(date) {
    // Your code here
    //split date string by /
    const yearMonthDay = date.split("/");
    //take off leading '0' character
    for (let i = 0; i < yearMonthDay.length; i++){
        if (yearMonthDay[i][0] === "0"){
            yearMonthDay[i] = yearMonthDay[i].slice(1);
        }
    }
    const year = yearMonthDay[0];
    let month;
    switch(yearMonthDay[1]){
        case "1":
            month = "January";
            break;
        case "2":
            month = "February";
            break;
        case "3":
            month = "March";
            break;
        case "4":
            month = "April";
            break;
        case "5":
            month = "May";
            break;
        case "6":
            month = "June";
            break;
        case "7":
            month = "July";
            break;
        case "8":
            month = "August";
            break;
        case "9":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
    }
    let day;
    switch(yearMonthDay[2]){
        case "1":
        case "21":
        case "31":
            day = yearMonthDay[2] + "st";
            break;
        case "2":
        case "22":
            day = yearMonthDay[2] + "nd";
            break;
        case "3":
        case "23":
            day = yearMonthDay[2] + "rd";
            break;
        default:
            day = yearMonthDay[2] + "th";
    }
    return `${month} ${day}, ${year}`
  };
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));
  