let person = {
  name: "Riththika",
  age: 21,
  IntroduceYou: function(person) {
    console.log(`Hi, I am ${person.name} and I am ${person.age} years old.`);
  },
  greetStudent: function(student) {
    console.log(`Hello ${student.name}, Welcome to the Coding School!`);
  }
};


let student = { name: "Riththi" };

person.IntroduceYou(person);
person.greetStudent(student);

// Dot notation
console.log(person.name);

// Bracket notation
console.log(person["age"]);

// Add new property
person.email = "Riththika@gmail.com";
console.log(person);

// Remove a property
delete person.email;
console.log(person)

// Check Property Existence
console.log("name" in person); 
console.log(person.hasOwnProperty("age")); 
console.log("email" in person); 

// Merge Two Objects
let course = {
       courseName: "JavaScript"
};

let studentCourse = { ...student, ...course };
console.log(studentCourse);







