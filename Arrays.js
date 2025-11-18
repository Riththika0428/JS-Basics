let num = [];
num[99] = 99;
console.log(num[99])

let Student = [
    {name:"Asha",
     score:85
    } ,
    {name:"Karan",
     score:70
    } ,
    {
        name:"Lisha",
        score:65
    }

];

// print all name using forEach
Student.forEach(list=>console.log(list.name));

// create a new array of scores using Map()
//    -map is like duplicate copy
let scores = Student.map(students => students.score)
console.log(scores);

// filter students who more than 80
//    -filter do by conditions
const topStudents = Student.filter(students => students.score >80)
console.log(topStudents);

// calculate average score using reduce()
const totalScore = Student.reduce((sum, students) => sum + students.score , 0)
const avgScore = totalScore / Student.length;
console.log(avgScore);

// using some, every, flatmap
console.log(Student.some(students => student.score >80));
console.log(Student.every(students => students.score >80));

const nested = [[1,2], [3,6],[7,8]];
console.log(nested.flat());
const flatmapped = nested.flatmap(arr => arr.map(n => n*2));
console.log(flatmapped);


