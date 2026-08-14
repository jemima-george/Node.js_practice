require('dotenv').config();
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast")

const address = process.argv[2]

if (!address){
    console.log('Please provide an address.')
} else {
    // Callback funs - either get an error or data
    // Data object destructured as variables and has an empty object default incase of error
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if (error){
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}



