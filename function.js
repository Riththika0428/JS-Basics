function vol(r,h){
    return Math.PI*(r**2)*h;
}
let VolCyle = vol( 7,12);
console.log(VolCyle);

// traditional function
const multiple = function(n){
    return n*n
}
console.log(multiple(5));

// Arrow function (short form)
const square = (n) => n*n;
console.log(square(5));

// Function calling another function
// function add (a, b){
//     return a+b;
// }
//   function displaysum(3, 5){
//     const add(3, 5);o
//   console.log
//   }




function CalculteSum(salary1, salary2){
    return salary1+salary2
}
 function IncreaseSalary(salary){
    return salary + salary*0.10
 }
  function showResult(salary1, salary2) {
  let total = CalculateSum(salary1, salary2);
  console.log("Total Salary = " + total);

  console.log("Salary 1 after 10% increase = " + increaseSalary(salary1));
  console.log("Salary 2 after 10% increase = " + increaseSalary(salary2));
}

let salary1 = parseFloat(prompt("Enter first salary:"));
let salary2 = parseFloat(prompt("Enter second salary:"));





  