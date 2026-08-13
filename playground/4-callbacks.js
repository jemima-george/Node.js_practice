// Callback func - func provided as an argument to another func for it to be called later
//  setTimeout - asynchronous so we can callback 

const add = (a, b, callback ) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1,4, (sum) => {
    console.log(sum)
})