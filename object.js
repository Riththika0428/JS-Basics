// Basic object
let car = {
    brand: "Toyota" ,
    Model: "camry" ,
    price: 24000
};
console.log(car)
console.log(car.Model)
console.log(car["brand"])   

// adding new property
car['ModelYear'] = 2024;
car.color = "Red";
console.log(car);

// changing existing property
car['price'] = 34000;
console.log(car);

// deleting property
delete car.price;
console.log(car);



