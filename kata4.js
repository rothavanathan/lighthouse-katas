const instructorWithLongestName = function(instructors) {
    // Put your solution here
    let longestName = {name: ""};
    instructors.forEach(function(instructor){
        if (instructor.name.length > longestName.name.length){ 
            longestName = instructor;
        }
    })
    return longestName;
  };
  
  console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));
  