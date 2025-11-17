// Question NO - 01 create an object
let employe = {
    name : "Riththika.B" ,
    age : 21 ,
    department : "IT" ,
    address : {
        with_city :"Chavakachcheri" ,
        zip : 40000

    } ,
    main_skills : ["HTML" ,"CSS" , "hJS"]

}

console.log(employe.address.with_city);
console.log(employe["address"]["zip"]);

// Destructure object to extract name and department
const {name,department} = employe;
console.log(name);
console.log(department);

// Add method introduce
function intro () {
    console.log(`Hi my name is ${employe.name}. I am working in ${employe.department}`);
}
intro();

employe.introduce =function(){
    console.log(`Hi my name is ${this.name}. I am working in ${this.department}`);
}
employe.introduce();

// Arrow function
const self_intro = () =>{
    console.log(`Hi my name is ${employe.name}. I am working in ${employe.department} `);
}
self_intro();

// Loop through skills Array
//   -forEach(index), here index is parameter.
employe.main_skills.forEach(skill=>console.log(skill));
// 
// object.keys() and object.values
// console.log()

// loop interation




// Question NO-02 Create an array
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




