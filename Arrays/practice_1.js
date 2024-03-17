let studentsMarks = [85,97,44,37,76,60];
let sum = 0;

for(let marks of studentsMarks){
    sum += marks;
}

console.log(`Average marks of entire class is ${sum/studentsMarks.length}.`);