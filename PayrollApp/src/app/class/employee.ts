export interface IAttendance {
    firstName: string;
    contact: string;
    id: number;
    attendanceDate: string;
    inTime: Date;
    outTime: Date;
    isFullDay: boolean;
}

export class Attendance implements IAttendance {
    firstName: string;
    contact: string;
    id: number;
    attendanceDate: string;
    inTime: Date;
    outTime: Date;
    isFullDay: boolean;
    attendanceId: number;

    constructor() {
        this.firstName = '';
        this.contact = '';
        this.id = 0;
        this.attendanceDate = '';
        this.inTime = new Date();
        this.outTime = new Date();
        this.isFullDay = false;
        this.attendanceId = 0;
    }
}
