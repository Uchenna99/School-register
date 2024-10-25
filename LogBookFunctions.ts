import { LogEntries } from "./LogBookInterface";

export interface LogBookFunctions {
    retrieveFile(): object[],
    addStudent(studentEntry: LogEntries):void,
    removeStudent(first_name : string, last_name: string): void,
    clearAllData():string,
    updateStudent(Id: number, updatedData: Partial<LogEntries>): LogEntries | void,
    getStudentById(name: string):void,
    saveData(Data: any):void
    displayAllStudents():void
}