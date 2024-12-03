// Task 1
function calculateGrade(students) {
    let totalMarks = 0;
  
    students.forEach(student => {
      totalMarks += student.marks;
    });
  
    const averageMarks = totalMarks / students.length;
  
    let grade = "Invalid";
    switch (true) {
        case averageMarks < 60:
            grade = "F";
            break;
        case averageMarks < 70:
            grade = "D";
            break;
        case averageMarks < 80:
            grade = "C";
            break;
        case averageMarks < 90:
            grade = "B";
            break;
        case averageMarks < 100:
            grade = "A";
            break;
        default:
            break;
    }
    console.log(`Average Marks: ${averageMarks}`);
    console.log(`Grade: ${grade}`);
    
}
  
const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 },
];
  
console.log(calculateGrade(students));