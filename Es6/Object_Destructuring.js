
const bioData = {
  name: 'Binita',
  address: 'Kuleshwor',
  degree: 'Csit',
  hobb: {
    first: 'listening ',
    second: 'coding'
  }
}

// console.log( `My name is ${bioData.name}` );

//Using Object Destructuring

let { name: myname, address: add, degree, hobb } = bioData;

console.log( `My name is ${myname}. I live in ${add} and I have studied ${degree} in bachlore. I love ${hobb.second} in my free time` )