let userName: string = 'Rameez sheikh';

//Convert into LowerCase:
let lowerCaseName = userName.toLowerCase();
console.log('LowerCase:', lowerCaseName);

//Convert into UpperCase:
let upperCaseName = userName.toUpperCase();
console.log('UpperCase', upperCaseName);

//Convert into titleCase:
let titlecaseName: string = userName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
console.log("TitleCase: ", titlecaseName);