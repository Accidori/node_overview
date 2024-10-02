const fs = require ('fs');

fs.readFile('./names.txt', 'utf8', (error, data) => {
    if(error){
        return console.log(error);
    }
console.log(data.replace(/\r/g, '').split('\n')); 

});

 function sumArray(arr){
    return arr.reduce((0, n) => 0 += n, 0);
 }

 function getEven(arr){
    return arr.filter((n) => (n % 2) === 0);
 }

 const result1 = getEven([7, 2, 10, 5, 9, 13, 100]);
 const result2 = getEven([100, 200, 75, 80, 1000]);
 
 console.log(result1, result2);
 
 const fruits = ['orange', 'apple']

 console.log(fruits.length);