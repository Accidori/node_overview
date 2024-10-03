const inquirer = require('inquirer');
const art = require('figlet');

const addName = require('./addName.js');
const spinWheel = require('./spinWheel.js');

let started = false;

//Main menu(done)
function showMenu(){

    if (started){
        console.log(`
            -----------------------------
            Welcome to Random Name Wheel!
            -----------------------------
        `);

        started = true;
    }

    const menuPromise= inquirer.prompt({
        message: 'Please choose an option.',
        name: 'menuChoice', //determines the answerobj property that this answer will be stored to
        type: 'list',
        choices: [ 'Spin the Wheel', 'Add a student', 'Exit']
    });

    menuPromise.then((answerObj) => {
        switch (answerObj.menuChoice) {
            case 'Add a student':
                addName();
                break;
            case 'Spin the Wheel':
                spinWheel();
            default:
                art.font('Goodbye...', 'doom', (err, rendered) =>{
                    console.log(rendered)
                });
        }
        
    });

}

module.export = showMenu;