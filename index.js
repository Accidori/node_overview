const data = {
    name: 'Me',
    age: 44,
    address: 'somewhere',
    phone: '999-999-9999',
    info:{
        location: "somewhere",
        county: 'someplace',
        places: ['Park','Aquarium']
    }
}


const {name, phone}= data;

console.log(name, phone);



function printdata(obj){
    for (const name of names){
        console.log(name);
    }

}











// console.log(combinedData);

// function printNames(...names){
//     for (const name of names){
//         console.log(name);
//     }

// }

// printNames('bob', 'frank', 'jill', 'billy', 'jane');
// printNames('jake', 'john');