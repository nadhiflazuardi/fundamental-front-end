// basically spreading operator, except it's in reverse

// combining elements on input into a single array
function sum(...numbers) {
  var result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5));

// combining all elements except the first one into a single array
const stuff = ['Samsung', 50, 2, 'milk', 'cheese', 'egg', 'butter'];
const [firstItem, ...theRest] = stuff;
console.log(theRest);