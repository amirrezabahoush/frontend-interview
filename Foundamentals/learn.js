//js this keyword

// - Global context
// In the global context, the this references the global object, which is the window object on the web browser or global object on Node.js.

console.log(this === window); // true

this.color= 'Red';
console.log(window.color); // 'Red'

// - Function invocation

// In the non-strict mode, the this references the global object when the function is called as follows:

function show() {
  console.log(this === window); // true
}

// To enable the strict mode, you use the directive "use strict" at the beginning of the JavaScript file. 
// If you want to apply the strict mode to a specific function only, you place it at the top of the function body.
// The strict mode applies to both function and nested functions. 

function show() {
  "use strict";
  console.log(this === undefined); // true

  function display() {
      console.log(this === undefined); // true
  }
  display();
}

// - Method invocation

// When you call a method of an object, JavaScript sets this to the object that owns the method. See the following car object:

let Car = {
  brand: 'Honda',
  getBrand: function () {
      return this.brand;
  }
}

console.log(Car.getBrand()); // Honda
// ---
let Brand = car.getBrand;
console.log(brand()); // undefined

// You get undefined instead of "Honda" because when you call a method without specifying its object, 
// JavaScript sets this to the global object in non-strict mode and undefined in the strict mode.

// To fix this issue, you use the bind() method of the Function.prototype object. 
// The bind() method creates a new function whose the this keyword is set to a specified value.

let carr = {
  brand: 'Honda',
  getBrand: function () {
      return this.brand;
  }
}

let bike = {
  brand: 'Harley Davidson'
}

let brand = car.getBrand.bind(bike);
console.log(brand());

// - Constructor invocation

function Car(brand) {
  this.brand = brand;
}

Car.prototype.getBrand = function () {
  return this.brand;
}

let car = new Car('Honda');
console.log(car.getBrand());

//To make sure that the Car() function is always invoked using constructor invocation, you add a check at the beginning of the Car() function as follows:

//ES6 introduced a meta-property named new.target that allows you to detect whether a function is invoked as a simple invocation or as a constructor.

// - Arrow functions

function Honda() {
  this.speed = 120;
}

Honda.prototype.getSpeed = () => {
  return this.speed;
}

var honda = new Honda();
honda.getSpeed(); // TypeError

// Inside the getSpeed() method, the this value reference the global object, not the Car object. 
// Therefore the car.getSpeed() invocation causes an error because the global object does not have the speed property.