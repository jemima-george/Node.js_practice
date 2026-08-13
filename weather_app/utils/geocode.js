const request = require("request")

// Geocoding using postionstack - get latitude and longitude of an place
// Callback function once we get the lattitude and longitude
const geocode = (address, callback) => {
    const url = 'https://api.positionstack.com/v1/forward?access_key=' + process.env.POSITION_API_KEY + '&query='+ encodeURIComponent(address)

    request({url:url, json:true}, (error, response) => {
        if (error){
            callback('Unable to connect to Location Service!', undefined)
        } else if (response.body.error || response.body.data.length === 0){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].label
            })
        }
    })
}

module.exports = geocode