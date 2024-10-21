import { LogBookFunctions } from "./LogBookFunctions";
import { LogEntries } from "./LogBookInterface";
import fs from "fs"



export class LogBookImplement implements LogBookFunctions {
    sendFile(): string {
        throw new Error("Method not implemented.");
    }

    retrieveFile(): LogEntries[] {
        const EmployeeFile = fs.readFileSync('LogData.json', 'utf-8')
        const EmployeeDataFile: LogEntries[] = JSON.parse(EmployeeFile)
        return EmployeeDataFile;
    }

    // private StudentsData: LogEntries[] = []

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
    updateStudent(Id: number, updatedData: Partial<LogEntries>): void {
        throw new Error("Method not implemented.");
    }
    getStudentById(Id: number): LogEntries | string {
        throw new Error("Method not implemented.");
    }
    
}


