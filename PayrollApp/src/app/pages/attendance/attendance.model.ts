import { Time } from "@angular/common";

export class AttendanceModel{
    id:number=0;
    firstName!:string;
    inTime!:Time;
    outTime!:Time;
    date!: Date;
}