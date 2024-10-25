"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogBookImplement = void 0;
const fs_1 = __importDefault(require("fs"));
class LogBookImplement {
    displayAllStudents() {
        const students = this.retrieveFile();
        students.map((student) => { console.log(student); });
    }
    saveData(Data) {
        const convData = JSON.stringify(Data, null, 2);
        fs_1.default.writeFileSync('LogData.json', convData, "utf8");
    }
    retrieveFile() {
        const EmployeeFile = fs_1.default.readFileSync('LogData.json', 'utf-8');
        const EmployeeDataFile = JSON.parse(EmployeeFile);
        return EmployeeDataFile;
    }
    clearAllData() {
        const empty = '[]';
        fs_1.default.writeFileSync('LogData.json', empty, 'utf-8');
        return 'Deleted successfully!';
    }
    updateStudent(Id, updatedData) {
        const Data = this.retrieveFile();
        const findStudent = Data.find((student) => student.Id === Id);
        if (findStudent) {
            Object.assign(findStudent, updatedData);
            console.log('Data updated successfully!');
        }
        else {
            console.log('Student not found!');
        }
        const convData = JSON.stringify(Data, null, 2);
        fs_1.default.writeFileSync('LogData.json', convData, "utf8");
        return findStudent;
    }
    addStudent(studentEntry) {
        const EmpFile = this.retrieveFile();
        EmpFile.push(studentEntry);
        const jsonData = JSON.stringify(EmpFile, null, 2);
        fs_1.default.writeFileSync('LogData.json', jsonData, 'utf-8');
        console.log('');
        console.log('Info saved successfully!');
    }
    removeStudent(first_name, last_name) {
        const Data = this.retrieveFile();
        const check = Data.findIndex((student) => {
            var _a;
            return (((_a = student.firstName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === first_name.toLowerCase()) &&
                (student.lastName.toLowerCase() === last_name.toLowerCase());
        });
        if (check > -1) {
            Data.splice(check, 1);
            console.log('');
            console.log(`${first_name} ${last_name} has been deleted.`);
            const convData = JSON.stringify(Data, null, 2);
            fs_1.default.writeFileSync('LogData.json', convData, "utf8");
        }
        else {
            console.log('');
            console.log(`${first_name} ${last_name} was not found.`);
        }
    }
    getStudentById(name) {
        const Data = this.retrieveFile();
        const foundStudents = [];
        Data.forEach((student) => {
            var _a, _b;
            ((_a = student.firstName) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == name.toLowerCase() ||
                ((_b = student.lastName) === null || _b === void 0 ? void 0 : _b.toLowerCase()) == name.toLowerCase() ? foundStudents.push(`${student.firstName} ${student.lastName}`) : '';
        });
        if (foundStudents[0]) {
            console.log('');
            console.log(`Students fond :  ${foundStudents}`);
        }
        else {
            console.log('');
            console.log('No student found');
        }
    }
}
exports.LogBookImplement = LogBookImplement;
