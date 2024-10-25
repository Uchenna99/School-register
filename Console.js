"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.goAgain = exports.option1 = exports.WelcomeMessage = void 0;
const Main_1 = require("./Main");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const WelcomeMessage = () => {
    console.log('');
    console.log('');
    console.log('');
    console.log("*******WELCOME TO APTECH******");
    console.log('');
    console.log("PLEASE SELECT AN OPTION BELOW.");
    console.log('');
    console.log('||     1  To sign in           ||');
    console.log('||     2  To find a student    ||');
    console.log('||     3  To delete a student  ||');
    console.log('||     4  To view all students ||');
    console.log('_________________________________');
    console.log('');
    console.log('');
};
exports.WelcomeMessage = WelcomeMessage;
let idNum = 0;
const option1 = () => {
    const firstName = prompt('Enter your first name : ');
    const lastName = prompt('Enter your last name : ');
    const program = prompt('What Program are you enrolled in? : ');
    const course = prompt('What subject are you currently learning? : ');
    const teacher = prompt("Your teacher's name : ");
    const laptop = prompt('Do you have a laptop? : ');
    const brand = prompt('What brand of laptop? : ');
    const time_in = prompt('Time in : ');
    const time_out = prompt('Time out : ');
    idNum++;
    const studentData = {
        Id: idNum,
        firstName: firstName,
        lastName: lastName,
        program: program,
        Teacher: teacher,
        Course: course,
        Laptop: laptop,
        LaptopBrand: brand,
        Time_In: time_in,
        Time_Out: time_out
    };
    Main_1.LogBookFunctions.addStudent(studentData);
};
exports.option1 = option1;
const goAgain = () => {
    console.log('');
    const goAgain = prompt('Would you like to do something else?');
    console.log('');
    if (goAgain.toLowerCase().trim() == 'yes') {
        // WelcomeMessage()
    }
    else if (goAgain.toLowerCase().trim() == 'no') {
        console.log('');
        console.log('Okay then, have a nice day in class!!');
        console.log('');
        let start = false;
    }
};
exports.goAgain = goAgain;
