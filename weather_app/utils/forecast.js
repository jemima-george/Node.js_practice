const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=' + process.env.WEATHER_API_KEY + '&query='+ latitude + ',' + longitude + '&units=f'
    request({url:url, json:true}, (error,response) => {
        if (error) {
            callback('Unable to connect to Weather Service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const results = response.body.current
            callback(undefined, results.weather_descriptions[0] + ". It is currently " + results.temperature + " degrees out. It feels like "+ results.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast