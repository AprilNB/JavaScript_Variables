console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "April";
let lastName = "Bullard";
var age = "35";
// Exercise 2
let fullName = firstName + " " + lastName;
let templateFullName = `${firstName} ${lastName}`;
console.log("fullName: ",fullName);
console.log("templateFullName: " ,templateFullName);
// Exercise 3
let myStory;
let city = "San Antonio";
let passtime = "solving mysteries and coding";
myStory = `My name is ${fullName}. I live in ${city}.  I enjoy ${passtime}!`;
console.log(myStory);