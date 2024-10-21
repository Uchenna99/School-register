import { LogEntries } from "./LogBookInterface";

export interface LogBookFunctions {
    retrieveFile(): object[],
    sendFile(): string,
    addStudent(studentEntry: LogEntries):string,
    removeStudent(Id: number): void,
    updateStudent(Id: number, updatedData: Partial<LogEntries>): void,
    getStudentById(Id: number): LogEntries | string
}