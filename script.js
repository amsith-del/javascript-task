// Print 1 to 10

// for (let i = 1; i <= 10; i=i+1) {
//     console.log(i);
// }


// Even numbers 2 to 20

// for (let i = 2; i <= 20; i=i+2) {
//     console.log(i);
// }




// Password check using while

// let password = "";

// while (password !== "1234") {
//     password = prompt("Enter Password");
// }

// alert("Correct Password!");




// Sum of two numbers

// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));

// console.log("Sum =", num1 + num2);




// Age Validator


// let age = Number(prompt("Enter your age"));

// if (age < 0) {
//     console.log("Invalid age");
// }
// else if (age >= 18) {
//     console.log("Eligible to Vote");
// }
// else {
//     console.log("Not eligible to vote");
// }




// Even or Odd Checker


// let number = Number(prompt("Enter a number"));

// if (number % 2 === 0) {
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }

// let a=Number(prompt("Enter first number"))
// let b=Number(prompt("Enter second number"))


// Largest of Two Numbers

// if (a>b){
//     console.log(a+"is greater")
// }
// else if (b>a){
//     console.log(b+"is greater")
// }
// else {
//     console.log("Both are equal number")
// }

// Default Username (Nullish Colesching)

// let username = null;
// let displayName = username ?? "Guest";
// console.log(displayName);


// Print Numbers from 1 to 10
// using for loop

// for (let i = 1; i <= 10; i=i+1) {
//     console.log(i);
// }

// Print Even Numbers using for loop

// for (let i = 2; i <= 20; i =i+ 2) {
//     console.log(i);
// }


// // Print Even Numbers using while loop

// let i = 2;

// while (i <= 20) {
//     console.log(i);
//     i += 2;
// }

// Countdown Using while

// let num = 10;

// while (num >= 1) {
//     console.log(num);
//     num--;
// }

//   Function Tasks

// Task1

// let num=["10","20","30","40","50"]

// for(i=0;i<= num.length;i++){
//     console.log(num[i])
// }
// let input = Number(prompt("Enter number between 0 to 4"))
// console.log("Your  number is :"+ num[input] )

// Function to find square of a number

// function square(num){
//     return num * num
// }
// console.log(square(5))

//  Funtion to find cube of a number

// function cube(num){
//     return num*num*num
// }
// console.log(cube(3))

// The square and cube  function declartion

// function square (num){
//     return num*num
// }
// console.log(square(4))

// function cube(num){
//     return num*num*num
// }
// console.log(cube(6))

// The square and cube  function expression
 
// let square = function(num){
//     return num*num
// }
// console.log(square(4))

// let cube=function(num){
//     return num*num*num
// }
// console.log(cube(3))

// The square and cube arrow functions

// let square = (num) => num*num
// console.log(square(4))

// let cube=(num) =>num*num*num
// console.log(cube(6))

// array with names and greet each name using a function

// let name=["name1","name2","name3","name4","name5"]

// function person(name){
//     console.log("Hello My name is "+name)
// }
// for (i=0;i<name.length;i++){
//     person(name[i])
// }