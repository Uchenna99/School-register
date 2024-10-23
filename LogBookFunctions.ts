import { LogEntries } from "./LogBookInterface";

export interface LogBookFunctions {
    retrieveFile(): object[],
    addStudent(studentEntry: LogEntries):void,
    removeStudent(Id: number): void,
    clearAllData():string,
    updateStudent(Id: number, updatedData: Partial<LogEntries>): LogEntries | void,
    getStudentById(Id: number): LogEntries | string,
    saveData(Data: any):void
}