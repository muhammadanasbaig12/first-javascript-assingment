// // Task 1
// var name = prompt("What is your name?"); 
// var age = Number(prompt("What is your age?"));
// var year = Number(prompt("What is the current year?"));

// var birthYear = year - age;
// alert("Hello " + name + "! You were born in " + birthYear + ".");

// // Task 2

// var item1 = Number(prompt("Enter first item price:"));
// var item2 = Number(prompt("Enter second item price:"));
// var item3 = Number(prompt("Enter third item price:"));

// var totalBill = item1 + item2 + item3;

// var members = Number(prompt("Enter family members:"));

// var share = totalBill / members;

// alert("Total Bill: " + totalBill +
//  "Each Person Share: " + share);


// Task 3

// Time-Based Greeting & Schedule Checker

// let hour = Number(prompt("Enter hour (1-12):"));
// let period = prompt("Enter AM or PM:").toUpperCase();

// if (hour < 1 || hour > 12 || (period !== "AM" && period !== "PM")) {
//     alert("Invalid time! Please enter a valid hour and AM/PM.");
// }
// else if (period === "AM" && hour === 12) {
//     alert("Good Night!");
// }
// else if (period === "AM" && hour >= 5) {
//     alert("Good Morning!");
// }
// else if (period === "AM") {
//     alert("Good Night!");
// }
// else if (period === "PM" && hour === 12) {
//     alert("Good Afternoon!");
// }
// else if (period === "PM" && hour < 5) {
//     alert("Good Afternoon!");
// }
// else {
//     alert("Good Evening / Good Night!");
// }


// Task 4


// Interactive Quiz & Grade System

// let score = 0;

// // Question 1
// let q1 = prompt("Q1: What is the capital of Pakistan?");

// if (q1.toLowerCase() === "islamabad") {
//     alert("Correct Answer!");
//     score++;
// } else {
//     alert("Wrong Answer! Correct answer is Islamabad.");
// }

// // Question 2
// let q2 = prompt("Q2: How many days are there in a week?");

// if (q2 === "7") {
//     alert("Correct Answer!");
//     score++;
// } else {
//     alert("Wrong Answer! Correct answer is 7.");
// }

// // Question 3
// let q3 = prompt("Q3: Which planet is known as the Red Planet?");

// if (q3.toLowerCase() === "mars") {
//     alert("Correct Answer!");
//     score++;
// } else {
//     alert("Wrong Answer! Correct answer is Mars.");
// }

// // Final Score
// alert("Your Total Score: " + score + "/3");

// // Grade System
// if (score === 3) {
//     alert("Grade A - Excellent!");
// }
// else if (score === 2) {
//     alert("Grade B - Very Good!");
// }
// else if (score === 1) {
//     alert("Grade C - Pass!");
// }
// else {
//     alert("Fail! Better Luck Next Time.");
// }
