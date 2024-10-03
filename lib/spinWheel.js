const fs = require('fs');
const showMenu = require('./lib/showMenu.js');

//Spins the wheel and selects a random name from the list
function spinWheel(){
    fs.readFile('./names.txt', 'utf8', (error, data) => {
        if (error){
            return console.log(error);
        }

        const names = data.replace(/\r/g, '').split('\n');
        let cycleAmount = 30;
        

        const cycle= setInterval(() => {
            const ranNum = Math.random();
            const index = Math.floor(ranNum * names.length);
            const ranName = names[index];

            console.clear();

            cycleAmount--;

            if(cycleAmount === 0){
                clearInterval(cycle);
                
            }else{
                console.log(ranName);
            }
        });



        //clean terminal and keep printing the names
        



        console.log(names[index]);




        console.log(`The winner is: ${names[randomIndex]}`);
        showMenu();
    });
}
module.export = spinWheel;