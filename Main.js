"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Binary_1 = require("./Binary");
const Brands_1 = require("./Brands");
const LogBookFunctionsImplement_1 = require("./LogBookFunctionsImplement");
const SchoolPrograms_1 = require("./SchoolPrograms");
const Teachers_1 = require("./Teachers");
const LogBookFunctions = new LogBookFunctionsImplement_1.LogBookImplement();
const Stud1 = {
    Id: 1,
    firstName: 'Tolu',
    lastName: 'Akinwande',
    program: SchoolPrograms_1.Programs.MERN_FullStack, Course: 'React',
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
    program: SchoolPrograms_1.Programs.MERN_FullStack, Course: 'Typescript',
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
console.log(LogBookFunctions.addStudent(Stud1));
console.log(LogBookFunctions.addStudent(Stud2));
console.log(LogBookFunctions.addStudent(Stud3));
// LogBookFunctions.removeStudent(2)
// console.log(LogBookFunctions.retrieveFile());
// console.log(LogBookFunctions.updateStudent(1, {lastName: 'Obiesie', program: Programs.MERN_FullStack, LaptopBrand:Brands.APPLE}));
// console.log(LogBookFunctions.getStudentById(1));
// console.log(LogBookFunctions.clearAllData());
