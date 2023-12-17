// destructuring in JS is a syntax to pull out values from an array/object to smaller units

const profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
};
 
let {firstName, lastName, age} = profile; // make sure the variable names are the same as the properties of the object
 console.log(firstName, lastName, age);

({country = "Wakanda"} = profile); // default value can be given and will be used when there is no matching property
console.log(country);

({age: umur} = profile); // different name can be used for variable by adding the name after colon when destructuring
console.log(umur); 