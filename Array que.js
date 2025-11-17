// Based on numbers = [1, 2, 36, 7]
let numbers = [1, 2, 26, 7];
//  Access First and Last Elements
console.log("First Element:", numbers[0]);
console.log("Last Element:", numbers[3]);
// OR console.log("Last Element:", numbers[numbers.length - 1]);

// Add Elements
numbers.unshift(6); // beginning
numbers.push(10);   //  end
console.log("After Adding:", numbers);

//  Remove Elements
numbers.shift(); //  first element
numbers.pop();   //  last element
console.log("After Removing:", numbers);
