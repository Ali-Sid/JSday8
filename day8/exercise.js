// Exercise: Level 1

// 1. Create an empty object called dog

const dog = {}

// 2. Print the dog object on the console

console.log(dog) // Output: {}

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Tom'
dog.legs = 4
dog.color = 'Brown'
dog.age = 2
dog.bark = function(){
  return 'woof woof'
}
console.log(dog.bark()) // Output: woof woof

// 4. Get name, legs, color, age and bark value from the dog object

// using dot notation
console.log(dog.name) // Tom
console.log(dog.legs) // 4
console.log(dog.color) // Brown
console.log(dog.age) // 2
console.log(dog.bark()) // woof woof
// using bracket notation
console.log(dog['name']) // Tom
console.log(dog['legs']) // 4
console.log(dog['color']) // Brown
console.log(dog['age']) // 2
console.log(dog['bark']()) // woof woof

// 5. Set new properties the dog object: breed, getDogInfo

dog.breed = 'German'
dog.getDogInfo = function(){
  return `I have a dog, it's name is ${dog.name}. It is ${dog.age} years old and ${dog.color} in colour. Its breed is ${dog.breed}.`
}

console.log(dog.getDogInfo()) // Output: I have a dog, it's name is Tom. It is 2 years old and Brown in colour. Its breed is German.

// Exercise: Level 2

// 1. Find the person who has many skills in the users object.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let mostSkilledPerson = ''
let maxSkills = 0

for(let user in users){
  if(users[user].skills.length > maxSkills){
    maxSkills = users[user].skills.length
    mostSkilledPerson = user
  }
}

console.log(`${mostSkilledPerson} has the most skills with ${maxSkills} skills.`)
// Output: Asab has the most skills with 8 skills.

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.

let logCount = 0
let pointCount = 0

for(let counter in users){
  if(users[counter].isLoggedIn){
    logCount++
  }

  if(users[counter].points >= 50){
    pointCount++
  }
}

console.log(logCount) // 2
console.log(pointCount) // 3

// 3. Find people who are MERN stack developer from the users object

const mernDev = []

for(let user in users){
  if(users[user].skills.includes('MongoDB') && users[user].skills.includes('Express') && users[user].skills.includes('React') && users[user].skills.includes('Node')){
    mernDev.push(user)
  }
}

console.log(mernDev) // Output: [ 'Asab', 'Paul' ]

// 4. Set your name in the users object without modifying the original users object

users.Ali = {}
console.log(users) // ...Ali:{}}

// 5. Get all keys or properties of users object

console.log(Object.keys(users))
/*
[
  'Alex',  'Asab',
  'Brook', 'Daniel',
  'John',  'Thomas',
  'Paul',  'Ali'
]
*/

// 6. Get all the values of users object.

console.log(Object.values(users))
/*
[
  {
    email: 'alex@alex.com',
    skills: [ 'HTML', 'CSS', 'JavaScript' ],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  {
    email: 'daniel@daniel.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux' ],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  {
    email: 'daniel@alex.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'Python' ],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  {
    email: 'john@john.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js' ],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  {
    email: 'thomas@thomas.com',
    skills: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  {}
]
*/

// 7. Use the countries object to print a country name, capital, populations and languages.

const countries = {
  India: {
    capital: 'New Delhi',
    populations: 1400000000,
    languages: ['Hindi', 'English', 'Telugu', 'Kannada', 'Urdu', 'Tamil', 'Malayalam', 'Marathi', 'Gujrati', 'Punjabi', 'Bengali']
  },
  Singapore: {
    capital: 'Singapore City',
    populations: 5453566,
    languages: ['English', 'Mandarin Chinese', 'Malay', 'Tamil']
  },
  Finland: {
    capital: 'Helsinki',
    populations: 5541017,
    languages: ['Finnish', 'Swedish']
  },
  Brazil: {
    capital: 'Brasilia',
    populations: 214326223,
    languages: ['Portuguese']
  },
  Egypt: {
    capital: 'Cairo',
    populations: 109262178,
    languages: ['Arabic']
  },
  Russia: {
    capital: 'Moscow',
    populations: 11979529,
    languages: ['Russia']
  }
}

for(let i in countries){
  console.log(`Country: ${i}`)
  console.log(`Capital: ${countries[i].capital}`)
  console.log(`Populations: ${countries[i].populations}`)
  console.log(`languages: ${countries[i].languages.join(", ")}`)
  console.log('..................................')
}

/*
Country: India
Capital: New Delhi
Populations: 1400000000
languages: Hindi, English, Telugu, Kannada, Urdu, Tamil, Malayalam, Marathi, Gujrati, Punjabi, Bengali
..................................
Country: Singapore
Capital: Singapore City
Populations: 5453566
languages: English, Mandarin Chinese, Malay, Tamil
..................................
Country: Finland
Capital: Helsinki
Populations: 5541017
languages: Finnish, Swedish
..................................
Country: Brazil
Capital: Brasilia
Populations: 214326223
languages: Portuguese
..................................
Country: Egypt
Capital: Cairo
Populations: 109262178
languages: Arabic
..................................
Country: Russia
Capital: Moscow
Populations: 11979529
languages: Russia
..................................
*/

// Exercise: Level 3

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: 'Ali',
  lastName: 'Siddiqui',
  incomes: [],
  expense: [],
  totalIncome: function(){
    let total = 0
    for(let i=0; i<this.incomes.length; i++){
      total += this.incomes[i].amount
    }
    return total
  },
  totalExpense: function(){
    let total = 0
    for(let i=0; i<this.expense.length; i++){
      total += this.expense[i].amount
    }
    return total
  },
  accountInfo: function(){
    return `Full Name: ${this.firstName} ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expenses: ${this.totalExpense()}`
  },
  addIncome: function(description, amount){
    this.incomes.push({description: description, amount: amount})
  },
  addExpense: function(description, amount){
    this.expense.push({description: description, amount: amount})
  },
  accountBalance: function(){
    return this.totalIncome() - this.totalExpense()
  }
}

personAccount.addIncome('Salary', 100000)
personAccount.addExpense('Rent', 25000)
personAccount.addExpense('Groceries', 10000)
personAccount.addExpense('Bill Payments', 10000)
personAccount.addExpense('Entertainment', 10000)
personAccount.addExpense('Fuel', 2000)
personAccount.addExpense('Other Expenses', 10000)

console.log(personAccount.totalExpense()) // 67000
console.log(personAccount.accountBalance()) // 33000
console.log(personAccount.accountInfo()) // Full Name: Ali Siddiqui, Total Income: 100000, Total Expenses: 67000

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const userss = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

/* Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application */

function signUp(username, email, password){
  const existingUser = userss.find(user => user.email === email)
  if(existingUser){
    console.log('You already have an account')
  }
  else {
    const newUser = {
      _id: Math.random().toString(36).substring(2,11),
      username: username,
      email: email,
      password: password,
      createdAt: new Date().toLocaleString(),
      isLoggedIn: false
    }
    userss.push(newUser)
    console.log('You have successfully signed up')
  }
}

function signIn(email, password){
  const user = userss.find(user => user.email === email && user.password === password)
  if(user){
    user.isLoggedIn = true
    console.log('You have succesfully signed in')
  } else {
    console.log('Incorrect email/password')
  }
}

signUp('Ali', 'ali@ali.com', 321321) // You have successfully signed up
// console.log(userss)

// 3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product



function rateProduct(productId, userId, rating){

  //find product by its id in the products array
  const product = products.find(product => product._id === productId)

  // if product doesn't exist, return 'product not found'
  if(!productId){
    return 'Product not found'
  }

  // check if user has already rated the product
  const ratingExist = product.ratings.find(rating => rating.userId === userId)

  //update the rating, if the user has already rated the product
  if(ratingExist){
    ratingExist.rate = rating
    return 'Rating updated'
  }

  // if the user hasn't rated the product, add new rating
  product.ratings.push({userId: userId, rate: rating})
  return 'rating added'
}

console.log(rateProduct('aegfal', 'trxu', 4)) // Output: rating added

function averageRating(productId){
  const product = products.find(product => product._id === productId)
  if(!product){
    console.log('Product not found')
    return
  }

  const totalRating = product.ratings.reduce((sum, rating) => sum + rating.rate, 0)
  const averageRating = totalRating/product.ratings.length
  console.log(`The average rating of ${product.name} is ${averageRating.toFixed(2)}.`)
}

averageRating('eedfcf') // Output: The average rating of mobile phone is 4.75.

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(productId, likeId){
  const prod = products.find(product => product._id === productId)

  /*
  
  The function first uses find to search for the product with the given ID in the products array. 
  If the product is found, the function checks if the user has already liked the product by checking if the likes array of the product includes the likeId. 
  If the user has already liked the product, the function removes the like by using the filter method to create a new array with all the elements of product.likes except for the likeId. 
  If the user has not liked the product, the function adds the like by pushing the likeId to the likes array.
  
  
  */
  if(prod){
    if(prod.likes.includes(likeId)){
      // user already liked the product, so remove the like
      prod.likes = prod.likes.filter(id => id !== likeId)
    } else {
      // add like as user didn't add like to the product
      prod.likes.push(likeId)
    }

    // return the likes array of the product that was modified
    return prod.likes

  } else {
    return 'product not found'
  }
}

console.log(likeProduct('xyz123', 'fg12cy')) // returns 'product not found' because the product id mentioned does not exist in the products array
console.log(likeProduct('aegfal', 'fg12cy')) // returns an empty array '[] as it removes the existing like from the product id: aegfal
console.log(likeProduct('aegfal', 'fg12cy')) // [ 'fg12cy' ] it adds like as it was an empty array as in the previous case, we removed like

