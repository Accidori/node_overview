// const fruits = ['orange','apple','grape']
// const fruits2 = ['kiwi','banana','strawberry']


//the ... is the spread operator which tkaes all of the arguments in an array

// // const combined = [...fruits, ...fruits2];

const data ={
    name:'Me',
    age: 44
}

const data2 ={
    name:'You',
    age: 99
}

const combinedData = {
    ...data,
    address: 'somewhere',
    number: '999-999-9999'
};

console.log(combinedData);




function printNames(...names){
    for (const name of names){
        console.log(name);
    }

}

printNames('bob', 'frank', 'jill', 'billy', 'jane');
printNames('jake', 'john');