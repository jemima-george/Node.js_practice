// fs module should be defined by loading it using require function that Node.js provides
const fs = require("fs")

// Function to write text into a file
fs.writeFileSync("notes.txt", "Hello.")

// Append text in file 
fs.appendFileSync("notes.txt", " This file was created by Node.js.")

// Load getNotes function from notes.js file
const getNotes = require("./notes.js")

const msg = getNotes()
console.log(msg)

// Install npm package - validator
const validator = require("validator")

// Use a validation function available in validator package
console.log(validator.isEmail("andrew@example.com"))

console.log(validator.isEmail("example.com"))

// Install npm package - chalk
const chalk = require("chalk")
const greenMsg = chalk.blue.bold.italic("Success!")
console.log(greenMsg)

/* Global modules and nodemon
- Install nodemon as a global npm module to access directly in the system and not just locally in the project.
- Run node.js file using nodemon as it automatically shows new output after saving changes in code
*/