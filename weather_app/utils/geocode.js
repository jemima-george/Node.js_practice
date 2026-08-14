const request = require("request")

// Geocoding using postionstack - get latitude and longitude of an place
// Callback function once we get the lattitude and longitude
const geocode = (address, callback) => {
    const url = 'https://api.positionstack.com/v1/forward?access_key=' + process.env.POSITION_API_KEY + '&query='+ encodeURIComponent(address)

    request({url, json:true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to Location Service!', undefined)
        } else if (body.error || body.data.length === 0){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                location: body.data[0].label
            })
        }
    })
}

module.exports = geocode