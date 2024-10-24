import { Binary } from "./Binary";
import { Brands } from "./Brands";
import { goAgain, option1, WelcomeMessage } from "./Console";
import { LogBookImplement } from "./LogBookFunctionsImplement";
import { LogEntries } from "./LogBookInterface";
import { Programs } from "./SchoolPrograms";
import { Teachers } from "./Teachers";
import PromptSync, * as promptSync from "prompt-sync"

export const LogBookFunctions = new LogBookImplement()

const Stud1: LogEntries = {
    Id: 1, 
    firstName: 'Tolu',
    lastName: 'Akinwande', 
    program: Programs.MERN_FullStack, 
    Course: 'React',
    Teacher: Teachers.MR_MIKE,
    Laptop: Binary.YES,
    LaptopBrand: Brands.DELL,
    Time_In: '9am',
    Time_Out: '5pm'
} 

const Stud2: LogEntries = {
    Id: 2, 
    firstName: 'Uchenna',
    lastName: 'Agbu', 
    program: Programs.MERN_FullStack, 
    Course: 'Typescript',
    Teacher: Teachers.MR_MIKE,
    Laptop: Binary.YES,
    LaptopBrand: Brands.HP,
    Time_In: '9:30am',
    Time_Out: '5:40pm'
} 

const Stud3: LogEntries = {
    Id: 3, 
    firstName: 'Stephanie',
    lastName: 'Lewis', 
    program: Programs.MERN_FullStack, 
    Course: 'Typescript',
    Teacher: Teachers.MR_MIKE,
    Laptop: Binary.YES,
    LaptopBrand: Brands.LENOVO,
    Time_In: '9:30am',
    Time_Out: '5:40pm'
} 

// console.log(LogBookFunctions.addStudent(Stud1));
// console.log(LogBookFunctions.addStudent(Stud2));
// console.log(LogBookFunctions.addStudent(Stud3));

// LogBookFunctions.removeStudent(1)

// console.log(LogBookFunctions.retrieveFile());

// console.log(LogBookFunctions.updateStudent(1, {lastName: 'Obiesie', program: Programs.MERN_FullStack, LaptopBrand:Brands.APPLE}));

// console.log(LogBookFunctions.getStudentById(1));

// console.log(LogBookFunctions.clearAllData());




// console.log('--------ATTENDANCE APP---------');
// console.log("[1]   Display all students");
// console.log("[2]   Add new student");




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




const prompt = PromptSync()



WelcomeMessage()

const openingPrompt = parseInt(prompt('Input a number to proceed : '))
const nums = '1234'

do { switch (openingPrompt) {
    case 1 :
        option1();
        // goAgain();
    break;


    case 2 :
        const name = prompt('Enter the first name OR last name of the student : ')
        LogBookFunctions.getStudentById(name);
        // goAgain();
    break;

    default:
        console.log('Error! Please enter a valid input.');
        console.log('*');
    break;
}
goAgain()

} while (nums.includes(openingPrompt.toString()));





// if(!nums.includes(openingPrompt.toString())){
//     console.log('Error! Please enter a valid input.');
//     console.log('*');
    
//     let openingPrompt = parseInt(prompt('Input a number to proceed : '))

// }else{}














// console.log(LogBookFunctions.addStudent(studentData));





// const options = prompt("Enter option: ")
// switch (options) {
//     case value:
        
//         break;

//     default:
//         break;
// }