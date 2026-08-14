// Express npm package - used to create web servers with node that can serve json data to brower and render it to the screen

const express = require("express")
const app = express()

// Home page
app.get('', (req, res)=>{
    // Send response if someone makes a request
    res.send('Hello express!')
})

// Help page
app.get('/help', (req, res)=>{
    res.send("Help Page")
})

app.get('/about', (req,res)=>{
    res.send('About Page')
})

app.get('/weather', (req,res) =>{
    res.send("Show Weather Forecast")
})

// Start server with listen and port
app.listen(8080, ()=>{
    console.log("Server is up on port 8080.")
})