import { Binary } from "./Binary";
import { Brands } from "./Brands";
import { Programs } from "./SchoolPrograms";
import { Teachers } from "./Teachers";

export interface LogEntries {
    Id: number;
    firstName: string;
    lastName: string;
    program: string;
    Course: string;
    Teacher: string;
    Laptop: string;
    LaptopBrand: string;
    Time_In: string;
    Time_Out: string;
}