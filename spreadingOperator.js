// spreading operator is three dots (...) and literally is used to spread elements of array
const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
console.log(favorites);

// this line...
console.log(...favorites); 
// equals to:
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);


// spreading operator is commonly used to combine elements from arrays into a single array
const others = ['Cake', 'Pie', 'Donut'];
const allFavorites = [...favorites, ...others];
console.log(allFavorites);
