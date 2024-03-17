let num = prompt("Enter an integer number:");

let arr = [];

for(let i=1; i<=num; i++){
    // arr[i-1] = i;
    arr.push(i);
}

console.log(arr);

let sum = arr.reduce((prev,curr)=>{
    return prev+curr;
})

console.log("sum =",sum);

let mul = arr.reduce((prev,curr)=>{
    return prev*curr;
})

console.log("mul =",mul);
