// Express npm package - used to create web servers with node that can serve json data to brower and render it to the screen

const express = require("express")
const app = express()

// Home page
app.get('', (req, res)=>{
    // Send response if someone makes a request
    res.send('<h1>Weather HTML Header<h1>')
})

// Help page
app.get('/help', (req, res)=>{
    res.send([{
        name: 'Damien',
        age: 34,
        type: 'JSON Format'
    }, {
        name: 'Harrison',
        age:17
    }])
})

app.get('/about', (req,res)=>{
    res.send('<h1>About Page<h1>')
})

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