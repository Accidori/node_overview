import {promises as fs} from 'fs';
import inquirer from 'inquirer';

async function createMarkdownFile() {

    const answerObj = await inquirer.prompt([
        {
            message:"What is your full name?",
            name:'fullName',
        },
        {
            message:"What is your phone number?",
            name:'phone',
        },

        {
            message:"What is your address?",
            name:'address',
        },
        {
            message:"What is your favorite food category?",
            name:'foodCat',
            type:'checkbox',
            choices:['Italian', 'portugese', 'mexican', 'korean', 'chinese', 'american']
        }
    ]);


    const favFoods = answerObj.foodCat.map((foodStr) => {
       return `-${foodStr}\n`;
    });


    const info = `
    ## Full Name: ${answerObj.fullName}
    - Phone: ${answerObj.phone}
    - Address: ${answerObj.address}
    - Favourite Food: 
    <details>
    ${favFoods.join ('')}
    </details>
    `;


    await fs.writeFile('details.md', info, (error) =>{
        if(error){
           return console.log(error);
        }

        console.log('Created markdown file!');
    });



}

export default createMarkdownFile;