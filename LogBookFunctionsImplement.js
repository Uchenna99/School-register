"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogBookImplement = void 0;
const fs_1 = __importDefault(require("fs"));
class LogBookImplement {
    sendFile() {
        throw new Error("Method not implemented.");
    }
    retrieveFile() {
        const EmployeeFile = fs_1.default.readFileSync('LogData.json', 'utf-8');
        const EmployeeDataFile = JSON.parse(EmployeeFile);
        return EmployeeDataFile;
    }
    // private StudentsData: LogEntries[] = []
    addStudent(studentEntry) {
        const EmpFile = this.retrieveFile();
        EmpFile.push(studentEntry);
        const jsonData = JSON.stringify(EmpFile, null, 2);
        fs_1.default.writeFileSync('LogData.json', jsonData, 'utf-8');
        return 'Saved successfully!';
    }
    removeStudent(Id) {
        const Data = this.retrieveFile();
        const check = Data.findIndex((student) => student.Id === Id);
        if (check > -1) {
            Data.splice(check, 1);
            console.log(`Student with Id: ${Id} has been deleted.`);
            const convData = JSON.stringify(Data, null, 2);
            fs_1.default.writeFileSync('LogData.json', convData, "utf8");
        }
        else {
            console.log(`Student with Id: ${Id} was not found.`);
        }
    }
    updateStudent(Id, updatedData) {
        throw new Error("Method not implemented.");
    }
    getStudentById(Id) {
        throw new Error("Method not implemented.");
    }
}
exports.LogBookImplement = LogBookImplement;