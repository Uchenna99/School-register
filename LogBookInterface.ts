import { Binary } from "./Binary";
import { Brands } from "./Brands";
import { Programs } from "./SchoolPrograms";
import { Teachers } from "./Teachers";

interface LogEntries {
    Id: number;
    firstName: string;
    lastName: string;
    program: Programs;
    Course: string;
    Teacher: Teachers;
    Laptop: Binary;
    LaptopBrand: Brands;
    Time_In: string;
    Time_Out: string;
}