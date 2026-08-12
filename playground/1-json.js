const fs = require("fs")

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON) // Parse converts JSON string into object

// Change data and convert object to string
data.name = "Dominic"
data.age = "32"
const newData = JSON.stringify(data) // Js method that converts object into json string
 
// Rewrite file with new data
fs.writeFileSync('1-json.json', newData)


