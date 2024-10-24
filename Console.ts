import { LogEntries } from "./LogBookInterface";
import { LogBookFunctions } from "./Main";
import PromptSync, * as promptSync from "prompt-sync"
const prompt = PromptSync()



export const WelcomeMessage =()=>{
    console.log("*******Welcome to Aptech******");
    console.log("Please select an option below.");
    console.log('1  To sign in');
    console.log('2  To find a student');
    console.log('3  To delete a student');
    console.log('4  To view all students');

}



export const option1 =()=>{
    const firstName = prompt('Enter your first name : ')
    const lastName = prompt('Enter your last name : ')
    const program = prompt('What Program are you enrolled in? : ')
    const course = prompt('What subject are you currently learning? : ')
    const teacher = prompt("Your teacher's name : ")
    const laptop = prompt('Do you have a laptop? : ')
    const brand = prompt('What brand of laptop? : ')
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

}



export const goAgain=()=>{
    const goAgain = prompt('Would you like to do something else?')
    if (goAgain.toLowerCase().trim() == 'yes'){
        WelcomeMessage()
        const openingPrompt = parseInt(prompt('Input a number to proceed : '))
    }else if(goAgain.toLowerCase().trim() == 'no'){
        console.log('Okay then, have a nice day in class!!');
    }

}