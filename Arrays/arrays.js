// Array
let marks = [67, 89, 78, 25, 67];

console.log(marks);
// console.log(marks.length); // length of the array -- it is a property "property are those which gives a value"

// looping over an aaray
// for(let val of marks){
//     console.log(val);
// }

// Methods in array

marks.push(45,78,98);
console.log(marks);

marks.pop();
console.log(marks);

console.log(marks.toString()); //it makes new array

console.log(marks.slice(0,3)); // it also makes new array

marks.splice(2,1,56);