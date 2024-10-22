import { LogBookFunctions } from "./LogBookFunctions";
import { LogEntries } from "./LogBookInterface";
import fs from "fs"



export class LogBookImplement implements LogBookFunctions {
    clearAllData(): string {
        const empty: string = '[]'
        fs.writeFileSync('LogData.json', empty, 'utf-8')
        return 'Deleted successfully!'
    }

    retrieveFile(): LogEntries[] {
        const EmployeeFile = fs.readFileSync('LogData.json', 'utf-8')
        const EmployeeDataFile: LogEntries[] = JSON.parse(EmployeeFile)
        return EmployeeDataFile;
    }

    addStudent(studentEntry: LogEntries):string {
        const EmpFile = this.retrieveFile()
        EmpFile.push(studentEntry)
        const jsonData = JSON.stringify(EmpFile, null, 2)
        fs.writeFileSync('LogData.json', jsonData, 'utf-8')
        return 'Saved successfully!'
    }
    removeStudent(Id: number): void {
        const Data:LogEntries[] = this.retrieveFile()
        const check = Data.findIndex((student)=> student.Id === Id)
        if(check > -1){
            Data.splice(check, 1)
            console.log(`Student with Id: ${Id} has been deleted.`);
            const convData = JSON.stringify(Data, null, 2)
            fs.writeFileSync('LogData.json', convData, "utf8")
            
            
        }else{
            console.log(`Student with Id: ${Id} was not found.`);
        }
    }

    updateStudent(Id: number, updatedData: Partial<LogEntries>): LogEntries | void {
        const Data = this.retrieveFile()
        const findStudent = Data.find((student)=> student.Id === Id)
        if(findStudent){
            Object.assign(findStudent, updatedData)
            console.log('Data updated successfully!');
            
        }else{
            console.log('Student not found!');
        }
        const convData = JSON.stringify(Data, null, 2)
        fs.writeFileSync('LogData.json', convData, "utf8")
        return findStudent
    }

    getStudentById(Id: number): LogEntries | string {
        const Data = this.retrieveFile()
        const foundStudent = Data.find((student)=> student.Id === Id)
        if(!foundStudent){
            return `Employee with Id: ${Id} does not exist`
        }else{
            return foundStudent
        }
    }
}
