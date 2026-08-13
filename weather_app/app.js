const request = require("request")
require('dotenv').config();

const url = 'https://api.weatherstack.com/current?access_key=' + process.env.WEATHER_API_KEY + '&query=37.8267,-122.4233&units=f'

// Request either gets an error or response back from url for the function
// Request to parse this as json - so converts to object
request({url:url, json:true}, (error,response) => {
    if (error) {
        console.log('Unable to connect to Weather Service!')
    } else if (response.body.error) {
        console.log('Unable to find location.')
    } else {
        const results = response.body.current
        console.log(results.weather_descriptions[0] + ". It is currently " + results.temperature + " degrees out. It feels like "+ results.feelslike + " degrees out.")
    }
})

// Geocoding using postionstack - get latitude and longitude of an place
const geocodeURL = 'https://api.positionstack.com/v1/forward?access_key=' + process.env.POSITION_API_KEY + '&query=Los%20Angeles'

request({url: geocodeURL, json: true}, (error,response) =>{
    if (error){
        console.log('Unable to connect to Location Service!')
    } else if (response.body.error || response.body.data.length === 0){
        console.log('Unable to find location.')
    } else {
        const results = response.body.data[0]
        console.log(
            "City: " + results.name + ", Latitude: " + results.latitude + ", Longitude: " + results.longitude)
    }
})


