const request = require("request")
require('dotenv').config();

const url = 'https://api.weatherstack.com/current?access_key=' + process.env.WEATHER_API_KEY + '&query=37.8267,-122.4233&units=f'

// Request either gets an error or response back from url for the function
// Request to parse this as json - so converts to object
request({url:url, json:true}, (error,response) => {
    const results = response.body.current

    console.log(results.weather_descriptions[0] + ". It is currently " + results.temperature + " degrees out. It feels like "+ results.feelslike + " degrees out.")
})


