import { Component } from '@angular/core';
import { LeaveModel } from './leave.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveService } from '../../service/leave.service';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrl: './leaves.component.css'
})
export class LeavesComponent {
  leaveModel :LeaveModel=new LeaveModel();
  formValue!:FormGroup;
  leaveData:any;
  employeeData:any;

  constructor(private leave:LeaveService,private formBuilder:FormBuilder,private emp:EmployeeService){}

  ngOnInit():void{
    this.formValue=this.formBuilder.group({
      firstName: [''],
      contact: [''],
      leaveType: [''],
      leaveDate:[''],
      leaveReason:[''],

    });
    this.getAll();
  this.getAllEmp();
  }

  leaveSave(){
    this.leaveModel.firstName = this.formValue.value.firstName;
    this.leaveModel.contact = this.formValue.value.contact;
    this.leaveModel.leaveDate = this.formValue.value.leaveDate;
    this.leaveModel.leaveReason = this.formValue.value.leaveReason;
    this.leaveModel.leaveType = this.formValue.value.leaveType;
    
    this.leave.leavePost(this.leaveModel)
      .subscribe(res => {
        console.log(res);
        alert("Leave Save")
        this.formValue.reset();
        this.getAll();
        
      },
        err => {
          alert("Leave Not save")
        }

      )
  }
  getAll(){
    this.leave.getAllLeave()
    .subscribe(res => {
      this.leaveData=res;     
      
    })
  }
  deleteAttendance(row:any){
    this.leave.deleteLeave(row.id)
    .subscribe(res => {
      console.log(res);
      alert("leave Deleted")
      this.formValue.reset();
      this.getAll();
      
    },
      err => {
        alert("leave not deleted")
      }

    )

  }
  onEdite(row: any) {
    this.leaveModel.id=row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['contact'].setValue(row.contact);
    this.formValue.controls['leaveType'].setValue(row.leaveType);
    this.formValue.controls['leaveDate'].setValue(row.leaveDate);
    this.formValue.controls['leaveReason'].setValue(row.leaveReason);
  }
  leaveEdit(){
    this.leaveModel.firstName = this.formValue.value.firstName;
    this.leaveModel.contact = this.formValue.value.contact;
    this.leaveModel.leaveDate = this.formValue.value.leaveData;
    this.leaveModel.leaveReason = this.formValue.value.leaveReason;
    this.leaveModel.leaveType = this.formValue.value.leaveType;
   
    this.leave.editLeave(this.leaveModel.id, this.leaveModel)
    .subscribe(res => {
      console.log(res);
      alert("Leave Updated")
      this.formValue.reset();
      this.getAll();
      
    },
      err => {
        alert("Leave Not Update")
      }

    )

  }

  resetForm() {
    this.formValue.reset(); // Resets form fields to their initial empty state
  }

  getAllEmp(){
    this.emp.getAllEmployee().subscribe(res => {
      console.log(res);
      this.employeeData=res
  })
}
  }



