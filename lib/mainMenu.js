import inquirer from 'inquirer';
import createMarkdownFile from './createMarkdownFile.js';

async function mainMenu(){

    const answersObj = await inquirer.prompt({
        message: "Please select a option",
        name:'menuChoice',
        type:'list',
        choices:['Create Markdown','Exit']
    });

    switch (answersObj.menuChoice) {
        case 'Create Markdown':
            await createMarkdownFile();
            mainMenu();
            break;
        default:
            console.log('Goodbye!');
    }




}

export default mainMenu;
