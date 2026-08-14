// Path node module to get path to other files
const path = require("path")

// Express npm package - used to create web servers with node that can serve json data to brower and render it to the screen
const express = require("express")

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public') 

// Web server displays html content in public folder
app.use(express.static(publicDirectoryPath))

app.get('/weather', (req,res) =>{
    res.send({
        forecast: 'The current temperature is 32 degrees.',
        location: "Boston"
    })
})

// Start server with listen and port
app.listen(8080, ()=>{
    console.log("Server is up on port 8080.")
})