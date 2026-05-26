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


let age = Number(prompt("Enter your age"));

if (age < 0) {
    console.log("Invalid age");
}
else if (age >= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not eligible to vote");
}