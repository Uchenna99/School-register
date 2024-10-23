import { Binary } from "./Binary";
import { Brands } from "./Brands";
import { LogBookImplement } from "./LogBookFunctionsImplement";
import { LogEntries } from "./LogBookInterface";
import { Programs } from "./SchoolPrograms";
import { Teachers } from "./Teachers";
import PromptSync, * as promptSync from "prompt-sync"

const LogBookFunctions = new LogBookImplement()

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


const Welcome =()=>{
    console.log("*******Welcome to Aptech******");
    console.log("Please select an option below.");
    console.log('1  To sign in');
    console.log('2  To find a student');
    console.log('3  To delete a student');
    console.log('4  To view all students');
}
Welcome();

const openingPrompt = parseInt(prompt('Input a number to proceed : '))

switch (openingPrompt) {
    case 1 :
        const firstName = prompt('Enter your first name : ')
        const lastName = prompt('Enter your last name : ')
        const program = prompt('What Program are you enrolled in? : ')
        const course = prompt('What subject are you currently learning? : ')
        const teacher = prompt("Your teacher's name : ")
        const laptop = prompt('Do you have a laptop? : ')
        const brand = prompt('Do you have a laptop? : ')
        const time_in = prompt('Time in : ')
        const time_out = prompt('Time out : ')

        const studentData:LogEntries = {
            Id: 1, 
            firstName: firstName,
            lastName: lastName, 
            program: program,
            Teacher: teacher,
            Course: course,
            Laptop: laptop,
            LaptopBrand: brand,
            Time_In: time_in,
            Time_Out: time_out
        } 
        LogBookFunctions.addStudent(studentData)
        const goAgain = prompt('Would you like to do something else?')
        if (goAgain.toLowerCase().trim() == 'yes'){
            Welcome()
        }else{console.log('Alright then, go your class!!!');
        }
        break;


        case 2 :
            const Id = parseInt(prompt('Enter the Id number of the student : '))
            console.log(LogBookFunctions.getStudentById(Id));
            
        break;

    default:
        break;
}








// console.log(LogBookFunctions.addStudent(studentData));





// const options = prompt("Enter option: ")
// switch (options) {
//     case value:
        
//         break;

//     default:
//         break;
// }