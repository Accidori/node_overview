const mathTools ={
    num1: 15,
    num2: 10,
    sum: function(){
        const nested = () =>{
            console.log('nested', this.num1);
            const moreNested = () =>{
                console.log('moreNested', this.num2);
            }
            moreNested();
        }
        
        nested();

        return this.num1 + this.num2;
    },
    difference: function(){
        return this.num1 - this.num2;
    } 
}

const sum = mathTools.sum();
const difference = mathTools.difference();

console.log('sum', sum)
console.log('difference', difference)



// function printName(userName){
//     const capitalize = str => str[0].toUpperCase() + str.slice(1);
//     const capName = capitalize(userName);
//     console.log(capName);
// }

// printName('bob');

// mathTools.sum;

