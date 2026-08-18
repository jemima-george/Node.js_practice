// Path node module to get path to other files
const path = require("path")
require('dotenv').config();

// Express npm package - used to create web servers with node that can serve json data to brower and render it to the screen
const express = require("express")
const hbs = require("hbs")

const app = express()

// Define Paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public') 
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const geocode = require('../../weather_app/utils/geocode.js') 
const forecast = require('../../weather_app/utils/forecast.js') 

// Setup handlebars engine and views location
// Hbs handlebars used to render dynamic content - set express view engine as hbs npm package 
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Web server displays static html content in public folder
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
        message: 'Contact me if you need any help.',
        name: 'Stacy'
    })
})

app.get('/weather', (req,res) =>{
    // Get request url and pasre query part to get address
    if (!req.query.address){
        return res.send({
            error: "You must provide an address term."
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location}={}) => {
        if (error){
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
}) 

app.get('/products', (req,res) =>{
    if (!req.query.search){
        return res.send({
            error: "You must provide a search term"
        })
    }
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404', {
        title: 'Error',
        name: 'Stacy',
        errorMessage: 'Help article not found.'
    })
})

// Handle URL error - all urls that has not been listed above
app.get('*', (req,res)=>{
    res.render('404', {
        title: 'Error',
        name: 'Stacy',
        errorMessage: 'Page not found.'
    })
})

// Start server with listen and port
app.listen(8080, ()=>{
    console.log("Server is up on port 8080.")
})