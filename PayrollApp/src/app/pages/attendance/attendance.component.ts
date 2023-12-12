import { Component, OnInit } from '@angular/core';
import { AttendanceModel } from './attendance.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AttendanceService } from '../../service/attendance.service';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit {
  attendanceModel :AttendanceModel=new AttendanceModel();
  formValue!:FormGroup;
  attendanceData: any;
  constructor(private attendance:AttendanceService,private formBuilder:FormBuilder){
  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      inTime: [''],
      outTime: [''],
      date: [''],
  });

  this.getAll();
  }

attendanceSave(){
  this.attendanceModel.firstName = this.formValue.value.firstName;
    this.attendanceModel.inTime = this.formValue.value.inTime;
    this.attendanceModel.outTime = this.formValue.value.outTime;
    this.attendanceModel.date = this.formValue.value.date;

    this.attendance.attendancePost(this.attendanceModel)
      .subscribe(res => {
        console.log(res);
        alert("Attendance Save")
        this.formValue.reset();
        this.getAll();
        
      },
        err => {
          alert("Attendance Not save")
        }

      )
  }
  getAll(){
    this.attendance.getAllAttendance()
    .subscribe(res => {
      this.attendanceData=res;     
      
    })
  }
  deleteAttendance(row:any){
    this.attendance.deleteAttendance(row.attendanceId)
    .subscribe(res => {
      console.log(res);
      alert("attendance Deleted")
      this.formValue.reset();
      this.getAll();
      
    },
      err => {
        alert("attendance not deleted")
      }

    )

  }
  onEdite(row: any) {
    this.attendanceModel.attendanceId=row.attendanceId;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['inTime'].setValue(row.inTime);
    this.formValue.controls['outTime'].setValue(row.outTime);
    this.formValue.controls['date'].setValue(row.date);
  }

  AttendanceEdit(){
    this.attendanceModel.firstName = this.formValue.value.firstName;
    this.attendanceModel.inTime = this.formValue.value.inTime;
    this.attendanceModel.outTime = this.formValue.value.outTime;
    this.attendanceModel.date = this.formValue.value.date;
    
 

    this.attendance.editAttendance(this.attendanceModel.attendanceId, this.attendanceModel)
    .subscribe(res => {
      console.log(res);
      alert("Attendnace Updated")
      this.formValue.reset();
      this.getAll();
      
    },
      err => {
        alert("Attendnace Not Update")
      }

    )

  }
  resetForm() {
    this.formValue.reset(); // Resets form fields to their initial empty state
  }
}


