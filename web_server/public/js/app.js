console.log("Client side javascript file is loaded.")

// Select form element in html
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#msg-one')
const messageTwo = document.querySelector('#msg-two')

weatherForm.addEventListener('submit', (e) =>{
    // Prevent event default behaviour that reloads page each time
    e.preventDefault()

    // Get input value
    const location = search.value

    // Render loading msg after form submitted
    messageOne.textContent = "Loading..."
    
    // Clear any previous messages 
    messageTwo.textContent = ''

    // Fetch api to get data from browser and convert to json object
    fetch('http://localhost:8080/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if (data.error){
                messageOne.textContent = "Error: " + data.error
            } else {
                // Render texts in pagragraph tags
                messageOne.textContent = "Location: " + data.location
                messageTwo.textContent = "Current Weather Forecast: " + data.forecast
            }
        })
    })

})