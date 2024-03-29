// JAVASCRIPT IS A WEAKLY TYPED LANGUAGE (NO EXPLICIT TYPE ASSIGNMENT; DATA TYPES CAN BE SWITCHED DYNAMICALLY); OBJECT ORIENTED LANGUAGE (DATA CAN BE ORGANISED IN A LOGICAL OBJECTS); VERSATILE LANGUAGE (RUNS IN BROWSER AND DIRECTLY ON A PC/SERVER)

// const name = "max";
// let age = 23;
// const hasHobbies = true;
// console.log(name);

// const summarizeUser = (userName, userAge, userHasHobby) => {
//   return (
//     "User name" +
//     userName +
//     "User age" +
//     userAge +
//     "User has hobbies" +
//     userHasHobby
//   );
// };

// const add = (a, b) => a + b;
// const addOne = (a) => a + 1;
// const addRundom = () => 1 + 2;

// console.log(summarizeUser(name, age, hasHobbies));

// const person = {
//   name: "Max",
//   age: 29,
//   greet() {
//     console.log(`Hi ${this.name}`);
//   },
// };
// person.greet();

// const printName = ({ name }) => {
//   console.log(name);
// };
// printName(person);

// const { name, age } = person;
// console.log(name, age);

// const hobbies = ["Sports", "Cooking", 1, true];
// to loop
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// will return a new array
// console.log(
//   hobbies.map((hobby) => {
//     return "Hobby: " + hobby;
//   })
// );
// console.log(hobbies);

// const coppiedArr = hobbies.slice();
// const coppiedArr = [...hobbies];

// const toArray = (...args) => {
//   return [args];
// };

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, 1500);
  });
  return promise;
};
setTimeout(() => {
  console.log("Timer is done");
  fetchData
    .then((text) => {
      console.log(text);
      return fetchData;
    })
    .then((text) => {
      console.log(text);
    });
}, 2000);

console.log("Hello");
console.log("Hi");
