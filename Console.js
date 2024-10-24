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
    console.log("*******Welcome to Aptech******");
    console.log("Please select an option below.");
    console.log('1  To sign in');
    console.log('2  To find a student');
    console.log('3  To delete a student');
    console.log('4  To view all students');
};
exports.WelcomeMessage = WelcomeMessage;
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
    const studentData = {
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
    };
    Main_1.LogBookFunctions.addStudent(studentData);
};
exports.option1 = option1;
const goAgain = () => {
    const goAgain = prompt('Would you like to do something else?');
    if (goAgain.toLowerCase().trim() == 'yes') {
        (0, exports.WelcomeMessage)();
        const openingPrompt = parseInt(prompt('Input a number to proceed : '));
    }
    else if (goAgain.toLowerCase().trim() == 'no') {
        console.log('Okay then, have a nice day in class!!');
    }
};
exports.goAgain = goAgain;
