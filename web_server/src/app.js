// Path node module to get path to other files
const path = require("path")

// Express npm package - used to create web servers with node that can serve json data to brower and render it to the screen
const express = require("express")

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public') 

// Hbs handlebars used to render dynamic content
// Set express view engine as hbs npm package 
app.set('view engine', 'hbs')

// Web server displays html content in public folder
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    // Render index.hbs view file and objects view should access
    res.render('index', {
        title: 'Weather App',
        name: 'Stacy'
    })
})

app.get('/about', (req,res) =>{
    res.render('about', {
        title: 'About Page',
        name: 'Stacy'
    })
})

app.get('/help', (req,res) =>{
    res.render('help', {
        title: 'Help Page',
        message: 'Contact me if you need any help.'
    })
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