const nums = [10, 3, 100, 70, 8, 55, 88]
const users=[
    {
        name: 'Bob',
        age: 99

    },
    {
        name: 'Jim',
        age: 25
    },
    {
        name: 'Sarah',
        age: 40

    }
]


//strudents
const students=[
    {
        name: 'Me',
        average: 99

    },
    {
        name: 'You',
        average: 90
    },
    {
        name: 'Them',
        average: 80

    },
    {
        name: 'Us',
        average: 70
    },
    {
        name: 'We',
        average: 85

    }
]

const sum = nums.reduce((output, num) => {
    return output + num

}, 0)

console.log(sum);

const overallAverage = students.reduce((output, studentObj, index, arr) => {
    if (index === arr.length -1){
        return (output + studentObj.average) / arr.length
    }
    
    
    
    return output + studentObj.average

}, 0)

let total= 0;



// for (const studentObj of students) {
//     total +=
    
// }


console.log(overallAverage);





// //checking if even
// const evenArray = nums.map((num) => {
//     if ((num % 2) === 0){
//         return `${num} is even`
            
//     }else{
//         return `${num} is odd`
//     }
// });

// console.log(evenArray);


// //Filter Numbers
// const filteredNums = nums.filter((num) => {
//     if (num > 10){
//         return true;
//     }
// });

// console.log(filteredNums);


// //Filters Users
// const filteredUsers = users.filter((users) => {
//     if (users > 10){
//         return true;
//     }
// });

// console.log(filteredUsers);





// //Sort Numbers
// const sorted = nums.sort((currentNum, nextNum) => {
//     return nextNum - currentNum
// });

// console.log(sorted);


// //Sort Users
// const sortedUsers = users.sort((currentObj, nextObj) => {
//     return currentObj.age - nextObj.age;
// });

// console.log(sortedUsers);





/*METHOD/HIGH-END FUNCTIONS EXAMPLES*/

// nums.forEach((num, index) => {
//     console.log(index);
// });;


// for (const num of nums){
//     if (num > 10){
//         break;
//     }
// console.log(num);

// }
