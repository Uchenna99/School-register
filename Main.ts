import { goAgain, option1, WelcomeMessage } from "./Console";
import { LogBookImplement } from "./LogBookFunctionsImplement";
import PromptSync, * as promptSync from "prompt-sync"


export const LogBookFunctions = new LogBookImplement()







const prompt = PromptSync()

// Start the function

runit()


function runit (){

    WelcomeMessage()

    const openingPrompt = parseInt(prompt('Input a number to proceed : '))
    const nums = '1234'
    let start: boolean = true

    

    do { switch (openingPrompt) {
        case 1 :
            console.log('');
            option1();
            goAgain()
        break;
    
    
        case 2 :
            console.log('');
            const name = prompt('Enter the first name OR last name of the student : ')
            LogBookFunctions.getStudentById(name);
            goAgain()
        break;

        case 3 :
            const first = prompt("Enter the student's first name : ")
            const last = prompt("Enter the student's last name : ")
            LogBookFunctions.removeStudent(first, last)
            goAgain()
        break;

        case 4 :
            LogBookFunctions.displayAllStudents()
            goAgain()
        break;
    
        default:
            console.log('*');
            console.log('Error! Please enter a valid input.');
            console.log('*');

        break;
    }
    runit()
    
    } while (start);

}












// const readLine = require("readline").createInterface({
//     input: process.stdin,
//     output: stdout,
// })

// const nums: string = '1234'

// readLine.question( WelcomeMessage(), (num:any)=>{
//     if(nums.includes(num)){
//         console.log('Good');
        
//     }
// })









// const fs = require('fs')
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('What is your name? : ', (userInput: string)=>{
//     console.log('Okay');
// })


// const lines: string[] = [];

// rl.on('line', (line: string)=>{lines.push(line)})

// rl.on('close', ()=>{console.log(lines);
// })