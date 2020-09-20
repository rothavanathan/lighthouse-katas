const organizeInstructors = function(instructors) {
    // Put your solution here
    const instructorsByCourse = {};
    instructors.forEach(instructor => {
        if(instructorsByCourse.hasOwnProperty(instructor.course)){
            instructorsByCourse[instructor.course].push(instructor.name)
        } else {
            instructorsByCourse[instructor.course] = [instructor.name]
        }
    })
    return instructorsByCourse;
  };
  
  console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));
  