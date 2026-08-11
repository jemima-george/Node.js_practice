// Creating your own modules
console.log("This message is imported from another file.")

const add = function(a,b){
    return a+b
}

// Export varaible name/function to access in another file
module.exports = add