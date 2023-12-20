// regular writing
const upperNames = ['Dimas', 'Widy', 'Buchori']
    .map(function (name) {
      return name.toUpperCase();
    });

console.log(...upperNames);


// with arrow function
const upperNames2 = ['Dimas', 'Widy', 'Buchori']
    .map(name => name.toUpperCase()); // single parameter doesn't need a bracket
 
console.log(...upperNames2);


// arrow function with multiple parameters
const sayHello = (name, greet) => console.log(`${greet}, ${name}!`);
 
sayHello('Yang Mulia', 'Selamat Pagi');


// arrow function with no parameter
const greetings = () => console.log('Selamat pagi semuanya!'); // brackets () can be replaced with underline _
 
greetings();


// arrow function with block body
const greetings2 = language => { // if body block is used...
  if (language.toUpperCase() === 'INDONESIA') {
    return 'Selamat Pagi!'; //... then return statement is needed to return value
  } else {
    return 'Good Morning!';
  }
}
 
console.log(greetings2('Indonesia'));


// arrow function with default value
const greetings3 = (name = 'Stranger', greet = 'Hello') => console.log(`${greet}, ${name}!`);
 
greetings3('Tuan', 'Hai');
greetings3();