// const name = 'Max'
// let age = 29
// const hasHobbies = true

// const summerizeUser = (userName, userAge, userHasHobby) => {
//   return (
//     'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby
//   )
// }

// const add = () => 2 + 1;

// console.log(add())

// console.log(summerizeUser(name, age, hasHobbies))

// const toArray = (...args) => {
//   return args;
// }
// console.log(toArray(1, 2, 3, 4))

// const person = {
//   name: 'Max',
//   age: 30,
//   greet() {
//     console.log('Hi, I am ' + this.name)
//   }
// }

// const printName = ({ name, age}) => {
//   console.log(name, age)
// }

// printName(person)

// const {name, age} = person
// console.log(name, age)

// const hobbies = ['Sports', "Cooking"]
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2)

const fetchData = () => {
  const promise = new Promise((res, rej) => {
     setTimeout(() => {
       res('Done')
     }, 1500)
  })
  return promise
}

setTimeout(() => {
  console.log("Timer is done!")
  fetchData()
  .then(text => {
    console.log(text)
    return fetchData()
  })
  .then(text2 => {
    console.log(text2)
  })
}, 2000)

console.log("Hello")
console.log('Hi')