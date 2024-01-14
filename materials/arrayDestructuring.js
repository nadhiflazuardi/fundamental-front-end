const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
 
const [firstFood, secondFood, thirdFood, fourthFood] = favorites; // value will be asigned based on its position inside the array
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);


const [first, , , last] = favorites; // choosing values from certain index to be assigned
console.log(first);
console.log(last);


const favorite = ['Seafood'];
const [myFood, herFood = 'Salad'] = favorites; // giving default value is similar to object destructuring
console.log(myFood);
console.log(herFood);