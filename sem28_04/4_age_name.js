let name = prompt("Enter your name:");
let yearOfBirth = prompt("Enter the year of your birth:");

let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;
document.write(`<p>${name}: ${age}</p>`);
