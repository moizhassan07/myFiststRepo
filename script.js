// SemiColon is upto you;
// single line comments
/*  Multi lines comments
 */

/* // JavaScript is a Case sensitive Language;
firstName; // They are not same;
FristName;
// How to write JS;
// UnderScore;
first_name;
last_name;
//  Pascal Case;
Firstname;
// Upper Camel Case !important
DateOfBirth;
// Lower Camel Case !important
// Famous and tend to used by dev;
dateOfBirth; */

// c++
// cout << "Hello";

/* console.log("Hello World!");
// innerHTML is used to print on document by using HTML tags. it render as like as HTML
document.getElementById("para").innerHTML = "<h1>Hello, My Name is Moiz Hassan</h1>";
// textContent is also used for print on document but renders as like a plain text
document.getElementById("para2").textContent = "<h1>Hello, My Name is Moiz Hassan</h1>"; */

// alert is used for some Imp messages like connection is bulid and lost;

// window.alert("You are Hacked!!");

// What are variables in JS?
// are meory location to Store values;
// keywrd used to delcare variables in JS
// --- var
// --- let;
// --- const

// --- What is var keywrd;
// early 2015 only var exists
// var has no scope;

// ---WHat is let keywrd ;
// intro in ES6(2015);
// is used to declare varible in JS;
// -- Block Scope
// -- Declare before use
// -- Cannot redecalre in same scope
// -- reasgin values
// useiblity:-
// 1. when we create a temp variable;
// 2. when we are working with block scope or using variable values;

// let num1 = 15;
// function scope(){
//     let num1=14;
// num1 = 19;
//     console.log(num1);
// }
// console.log(num1);
// scope();

// what is const keywrd
// intro in ES6(2015);
// Block Scope
// Declare before use
// -- Cannot redecalre in same scope
// cannot reassigend;
// When we delacle a array, object, promise, ayns fun, callback;
const cars = ["BMW", "Audi"];
// cars = ["toyota", "honda"]; // syntax error
cars[1] = "Merec";
console.log(cars[1]);

function scope() {
  const num1 = 15;
  console.log(num1);
}

// dateTypes
/* 1. String; // textual data;
2. Numbers; // whole numbers, decimal numbers;
3. boolean; // True False
4. undefined; 
5. NULL;
6. object; // userdata
 */

// String Data type is used to stored alphabts 0-9, special char #@!£"%^&

let text = 'Hello, my name is "Moiz Hassan". My age is "20"';
// \' added a single qoutues in your string;
// \" added a double qoutues in your string;
// \\ added a blackslash in your string;
console.log(text);

// String Methods;
console.log(text.length); // lenght is used for length of a string;
console.log(text.charAt(34)); // acess the value/ letter at a specific index. Index start from 0;
console.log(text.charCodeAt(34)); // retrun the ASCII of the index element;
let temp = text.slice(7, 35); // is used to  method extracts a part of a string.
console.log(temp);
console.log(text.toUpperCase()); // change to upperCase;
console.log(text.toLowerCase()); // change to lowerCase;
let current = text.replace("Moiz Hassan", "Haider Ali"); // used to replace the spefic charcter from string. it is a case senstive
console.log(current);
console.log(text.repeat(5)); // ussed repat the strig
console.log(text.search("My")); // used to search the parameter from string. case senstive. not found retrun -1;
console.log(text.indexOf("is")); // when it founds at start of string if will retrun the indx but the rest will be neglected;
console.log(text.lastIndexOf("is"));

// Opreators;
// --Arthmtic oprt +, -, *, /, %, **
console.log(48);
// Assigment oprt
let x = 5;
// --Arthmtic assigemt optr
x = x + 10;
x += 10;
x -= 10;
x *= 2;
console.log(x);

// Relational opetr
let a = "car";
let b = "car";
// == equal
// === equal to and equal type
// != not equal
// !== not equal to and not equal type
// > greater than
// < lesser than
// >=
//? tenary optr
if (a == b) {
  console.log("Match");
}
a == b ? console.log("mathc") : console.log("not");

let num = 55 + "Hello"; // 55Hello  // When we are adding a number with a string JS consider the number as string aslo
// JS work form left to right
let num1 = 26 + 7 + "Hello"; // 33Hello

let num2 = "Hello" + 15 + 11; // Hello1511

// Objects
// Objects are like containers which holds data and methods (functions)
// car is an object;
// properties                  Methods
// company: BMW                start() // coldstrat
// model : M5
// engine: V8

const car = {
  name: "BMW",
  model: "M5 CS",
  year: 2021,
  start: function () {
    return "Car is running";
  },
  displayCar: function () {},
};
car.prototype.displayCar = function () {
  return this.name;
};
// How to acess these key/ names from object;
// dot notation

console.log(car.model);
// sq brackets notation
console.log(car["name"]);
car.weight = "2130 KG";
console.log(car.weight);
delete car.weight;
console.log(car.displayCar());

/* Student Data Management

Objective: Practice working with strings, objects, and operators in JavaScript.

Instructions:

1. Create Student Variables:
   - Define three variables for student data (name, age, major).

2. String Manipulation:
   - Capitalize the first letter of a student's name.
   - Create a sentence displaying student information.

3. Calculations:
   - Calculate the average age of the students.
   - Determine the oldest student.

4. Updating Information:
   - Increase the age of one student.
   - Display the updated age. */

const student1 = {
  name: "Moiz",
  age: 20,
  cgpa: 3.7,
  fulldetails: function () {
    return this.name + " " + this.age + " " + this.cgpa;
  },
};
const student2 = {
  name: "Hassan",
  age: 20,
  cgpa: 3.2,
};

// Object by using new keyword

function helloTo() {
  console.log("Hello");
}

function Person(n, a, p, cgpa) {
  this.name = n;
  this.age = a;
  this.profession = p;
  clone;
  this.CGPA = cgpa;
}
// object create
const person = new Person("Moiz", 20); // import
const person2 = new Person("Hassan", 19, "DA", 1.5);
console.log(student1.fulldetails());

// Git and Git Hub
// basic commands
// 1. git version check the version of our git
// 2. git config --global user.name "<username>"
// 2. git config --global user.email "<email>"
// 2. git clone <link>
