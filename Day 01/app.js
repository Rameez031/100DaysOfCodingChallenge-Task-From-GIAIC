"use strict";
// Question 02:
let studentName = 'Rameez Ramzy';
console.log(`Hello! ${studentName} Would you like to learn some TypeScript today?`);
// Question 03:
let userName = 'Rameez sheikh';
//Convert into LowerCase:
let lowerCaseName = userName.toLowerCase();
console.log('LowerCase:', lowerCaseName);
//Convert into UpperCase:
let upperCaseName = userName.toUpperCase();
console.log('UpperCase', upperCaseName);
//Convert into titleCase:
let titlecaseName = userName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
console.log("TitleCase: ", titlecaseName);
