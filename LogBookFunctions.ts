import { LogEntries } from "./LogBookInterface";

export interface LogBookFunctions {
    retrieveFile(): object[],
    addStudent(studentEntry: LogEntries):string,
    removeStudent(Id: number): void,
    updateStudent(Id: number, updatedData: Partial<LogEntries>): LogEntries | void,
    getStudentById(Id: number): LogEntries | string
}