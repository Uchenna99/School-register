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

// LogBookFunctions.removeStudent(2)

// console.log(LogBookFunctions.retrieveFile());

console.log(LogBookFunctions.updateStudent(1, {lastName: 'Obiesie', program: Programs.MERN_FullStack, LaptopBrand:Brands.APPLE}));

// console.log(LogBookFunctions.getStudentById(1));




