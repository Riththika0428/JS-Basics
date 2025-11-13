// Program to round a floating number to 2 decimals and display it with a currency symbol using template literal
let price = 768.456;  
 let roundedPrice = price.toFixed(2);
console.log(`Price: LKR ${roundedPrice}`);

// Get a user’s full name and display it in uppercase without extra spaces
let fullName = prompt("Enter your full name:");
let Name = (fullName.trim());
let endname = (Name.toUpperCase());
console.log(`Your name: ${endname}`);
// trim() → removes spaces before and after the name
// toUpperCase() → converts all letters to uppercase.
// Template literal → combine text and variables easily

// Convert "123abc" safely to a number and handle NaN using Number.isNaN()
let value = "123abc"; 
let numberValue = Number(value);
console.log(numberValue)

console.log(isNaN(value));
console.log(typeof (value))
console.log(typeof(numberValue))

// Clean unwanted characters from a text input like "hello@@world@@!"
let text = "hello@@world@@!";
let TextNew = text.replace(/@/g, '');
console.log(TextNew);
 


// Format a receipt like:Item: Keyboard Price: Rs 250.00 (padEnd() for alignment











     