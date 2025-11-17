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
    // get 2 salaries as input, add them, and then increase each by 10%
function SumSalaries(salary1, salary2) {
return salary1 + salary2;
}
function bonus(){
const total = SumSalaries(50000, 75000);
let bonus=total*0.1
let totalwithbonus=bonus+total;
console.log("The total combined salary is: $" + total);
console.log(totalwithbonus);
}
bonus();

// arrow function

const addSalariess = (salary1, salary2) => salary1 + salary2;

const bonuss = () => {
const totalCombinedSalary = addSalariess(50000, 75000);
let bonus = totalCombinedSalary * 0.1;
let totalwithbonus = bonus + totalCombinedSalary;
console.log("The total combined salary is: $" + totalCombinedSalary);
console.log(totalwithbonus);
}

bonuss();
 












  