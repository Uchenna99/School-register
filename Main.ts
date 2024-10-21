import { Binary } from "./Binary";
import { Brands } from "./Brands";
import { LogBookImplement } from "./LogBookFunctionsImplement";
import { LogEntries } from "./LogBookInterface";
import { Programs } from "./SchoolPrograms";
import { Teachers } from "./Teachers";

const LogBookFunctions = new LogBookImplement()

const Stud1: LogEntries = {
    Id: 1, 
    firstName: 'Tolu',
    lastName: 'Akinwande', 
    program: Programs.MERN_FullStack, Course: 'React',
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
    program: Programs.MERN_FullStack, Course: 'Typescript',
    Teacher: Teachers.MR_MIKE,
    Laptop: Binary.YES,
    LaptopBrand: Brands.HP,
    Time_In: '9:30am',
    Time_Out: '5:40pm'
} 

// console.log(LogBookFunctions.addStudent(Stud1));
// console.log(LogBookFunctions.addStudent(Stud2));

// LogBookFunctions.removeStudent(2)

// console.log(LogBookFunctions.retrieveFile());


