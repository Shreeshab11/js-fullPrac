const arr = [10,20,30,40,50,60,70];

console.log(arr);

arr.push(80);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(1);
console.log(arr);


arr.shift();
console.log(arr);


// slice and splice
const slice = arr.slice(0,3);
console.log("slice : " , slice);

const splice = arr.splice(0,3);
console.log("splice: ",splice)

console.log("Og array",arr);


//concat arrays
const arr1 = [-10,-20,-30,-40];
const arr2 = [10,20,30,40];

// arr1.push(arr2);
// console.log(arr1);

const concat = arr1.concat(arr2);
console.log(concat);

const concatArray = [... arr1 , ...arr2];
console.log("Concated Array",concatArray);

