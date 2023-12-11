import { Component, OnInit } from '@angular/core';
import {  Attendance, IAttendance } from '../../class/employee';
import { EmployeeService } from '../../service/employee.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit   {
  attendanceArray: IAttendance[]=[];
  attendanceObj:Attendance = new Attendance ();
  employeeArray:any[]=[];

  constructor(private emp:EmployeeService ,private http:HttpClient){

  }

  ngOnInit(): void {
    this.getEmployee();
  } 
  getEmployee(){
    this.emp.getAllEmployee().subscribe((result:any)=>{
      this.employeeArray=result.data;
  })
}
}
