const fs = require('fs');
const inquirer = require('inquirer');


//Adds an name to the list of students(done)
function addName(){
    const studentPromise= inquirer.prompt({
        message: 'Enter student name',
        name: 'studentName',
    });

    studentPromise.then((answerObj) => {
        fs.appendFile('./names.txt', '\n' + answerObj.studentName, (error) => {
            if (error){
                return console.log(error);
            }
            
            console.log('The name was added successfully!\n----------');
            showMenu();
        });
    });

}

module.export = addName;