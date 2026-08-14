// Object property shorthand

const name = 'Mandy'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Boston'
}

console.log(user)

// Object destructuring - extract properties in an object as individual variables that stor the object values

const product = {
    label: 'Diary',
    price: 3,
    stock: 200,
    salePrice: undefined,
    rating: 4.2
}

// Can change variable name to store object value
// rating has default value if not present in product object
const {label:productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)


// Destructure object in line
const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)