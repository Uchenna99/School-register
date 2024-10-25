"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogBookFunctions = void 0;
const Console_1 = require("./Console");
const LogBookFunctionsImplement_1 = require("./LogBookFunctionsImplement");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
exports.LogBookFunctions = new LogBookFunctionsImplement_1.LogBookImplement();
const prompt = (0, prompt_sync_1.default)();
// Start the function
runit();
function runit() {
    (0, Console_1.WelcomeMessage)();
    const openingPrompt = parseInt(prompt('Input a number to proceed : '));
    const nums = '1234';
    let start = true;
    do {
        switch (openingPrompt) {
            case 1:
                console.log('');
                (0, Console_1.option1)();
                (0, Console_1.goAgain)();
                break;
            case 2:
                console.log('');
                const name = prompt('Enter the first name OR last name of the student : ');
                exports.LogBookFunctions.getStudentById(name);
                (0, Console_1.goAgain)();
                break;
            case 3:
                const first = prompt("Enter the student's first name : ");
                const last = prompt("Enter the student's last name : ");
                exports.LogBookFunctions.removeStudent(first, last);
                (0, Console_1.goAgain)();
                break;
            case 4:
                exports.LogBookFunctions.displayAllStudents();
                (0, Console_1.goAgain)();
                break;
            default:
                console.log('*');
                console.log('Error! Please enter a valid input.');
                console.log('*');
                break;
        }
        runit();
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
