"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogBookFunctions = void 0;
const Binary_1 = require("./Binary");
const Brands_1 = require("./Brands");
const Console_1 = require("./Console");
const LogBookFunctionsImplement_1 = require("./LogBookFunctionsImplement");
const SchoolPrograms_1 = require("./SchoolPrograms");
const Teachers_1 = require("./Teachers");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
exports.LogBookFunctions = new LogBookFunctionsImplement_1.LogBookImplement();
const Stud1 = {
    Id: 1,
    firstName: 'Tolu',
    lastName: 'Akinwande',
    program: SchoolPrograms_1.Programs.MERN_FullStack,
    Course: 'React',
    Teacher: Teachers_1.Teachers.MR_MIKE,
    Laptop: Binary_1.Binary.YES,
    LaptopBrand: Brands_1.Brands.DELL,
    Time_In: '9am',
    Time_Out: '5pm'
};
const Stud2 = {
    Id: 2,
    firstName: 'Uchenna',
    lastName: 'Agbu',
    program: SchoolPrograms_1.Programs.MERN_FullStack,
    Course: 'Typescript',
    Teacher: Teachers_1.Teachers.MR_MIKE,
    Laptop: Binary_1.Binary.YES,
    LaptopBrand: Brands_1.Brands.HP,
    Time_In: '9:30am',
    Time_Out: '5:40pm'
};
const Stud3 = {
    Id: 3,
    firstName: 'Stephanie',
    lastName: 'Lewis',
    program: SchoolPrograms_1.Programs.MERN_FullStack,
    Course: 'Typescript',
    Teacher: Teachers_1.Teachers.MR_MIKE,
    Laptop: Binary_1.Binary.YES,
    LaptopBrand: Brands_1.Brands.LENOVO,
    Time_In: '9:30am',
    Time_Out: '5:40pm'
};
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
const prompt = (0, prompt_sync_1.default)();
(0, Console_1.WelcomeMessage)();
const openingPrompt = parseInt(prompt('Input a number to proceed : '));
const nums = '1234';
do {
    switch (openingPrompt) {
        case 1:
            (0, Console_1.option1)();
            // goAgain();
            break;
        case 2:
            const name = prompt('Enter the first name OR last name of the student : ');
            exports.LogBookFunctions.getStudentById(name);
            // goAgain();
            break;
        default:
            console.log('Error! Please enter a valid input.');
            console.log('*');
            break;
    }
    (0, Console_1.goAgain)();
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
