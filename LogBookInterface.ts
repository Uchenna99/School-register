import { Binary } from "./Binary";
import { Brands } from "./Brands";
import { Programs } from "./SchoolPrograms";
import { Teachers } from "./Teachers";

export interface LogEntries {
    Id: number;
    firstName: string | null;
    lastName: string | null;
    program: string | null;
    Course: string | null;
    Teacher: string | null;
    Laptop: string | null;
    LaptopBrand: string | null;
    Time_In: string | null;
    Time_Out: string | null;
}