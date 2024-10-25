import { LogBookFunctions } from "./LogBookFunctions";
import { LogEntries } from "./LogBookInterface";
import fs from "fs"



export class LogBookImplement implements LogBookFunctions {
    displayAllStudents(): void {
        const students = this.retrieveFile()
        students.map((student)=> { console.log(student); } )
    }
    saveData(Data: any): void {
        const convData = JSON.stringify(Data, null, 2)
        fs.writeFileSync('LogData.json', convData, "utf8")
    }

    retrieveFile(): LogEntries[] {
        const EmployeeFile = fs.readFileSync('LogData.json', 'utf-8')
        const EmployeeDataFile: LogEntries[] = JSON.parse(EmployeeFile) 
        return EmployeeDataFile;
    }

    clearAllData(): string {
        const empty: string = '[]'
        fs.writeFileSync('LogData.json', empty, 'utf-8')
        return 'Deleted successfully!'
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

    addStudent(studentEntry: LogEntries):void {
        const EmpFile = this.retrieveFile()
        EmpFile.push(studentEntry)
        const jsonData = JSON.stringify(EmpFile, null, 2)
        fs.writeFileSync('LogData.json', jsonData, 'utf-8')
        console.log('');
        console.log('Info saved successfully!');
        
    }

    removeStudent(first_name : string, last_name: string): void {
        const Data:LogEntries[] = this.retrieveFile()
        const check = Data.findIndex((student:any)=> (student.firstName?.toLowerCase() === first_name.toLowerCase()) && 
        (student.lastName.toLowerCase() === last_name.toLowerCase()))
        if(check > -1){
            Data.splice(check, 1)
            console.log('');
            console.log(`${first_name} ${last_name} has been deleted.`);
            const convData = JSON.stringify(Data, null, 2)
            fs.writeFileSync('LogData.json', convData, "utf8")
            
        }else{
            console.log('');
            console.log(`${first_name} ${last_name} was not found.`);
        }
    }

    getStudentById(name: string) {
        const Data = this.retrieveFile()
        const foundStudents: any = []
        Data.forEach((student)=>{
            student.firstName?.toLowerCase() == name.toLowerCase() || 
            student.lastName?.toLowerCase() == name.toLowerCase() ? foundStudents.push(`${student.firstName} ${student.lastName}`) : '';
        })
        if(foundStudents[0]){
            console.log('');
            console.log(`Students fond :  ${foundStudents}`);
        }else{
            console.log('');
            console.log('No student found');
            
        }
    }
}
