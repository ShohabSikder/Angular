import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employee.model';
import { EmployeeService } from '../../service/employee.service';
import { FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employeeModel : EmployeeModel=new EmployeeModel();
  formValue!:FormGroup;
  employeeData: any;
  
  constructor(private employee:EmployeeService,private formBuilder:FormBuilder){
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      gender: [''],
      contact:[''],
      email:[''],
      salary:[''],
      department:[''],
    });
  

    this.getAll();
  }

  saveEmployee() {

    
    this.employeeModel.firstName = this.formValue.value.firstName;
    this.employeeModel.lastName = this.formValue.value.lastName;
    this.employeeModel.email = this.formValue.value.email;
    this.employeeModel.department = this.formValue.value.department;
    this.employeeModel.gender = this.formValue.value.gender;
    this.employeeModel.contact = this.formValue.value.contact;
    this.employeeModel.salary = this.formValue.value.salary;
    

    this.employee.employeePost(this.employeeModel)
      .subscribe(res => {
        console.log(res);
        alert("Employee Added")
        this.formValue.reset();
        this.getAll();
        
      },
        err => {
          alert("Data Not save")
        }

      )
  }

  getAll(){
    this.employee.getAllEmployee()
    .subscribe(res => {
      this.employeeData=res;     
      
    })
  }

  deleteEmployee(row:any){
    this.employee.deleteEmployee(row.id)
    .subscribe(res => {
      console.log(res);
      alert("Employee Deleted")
      this.formValue.reset();
      this.getAll();
      
    },
      err => {
        alert("Data Not Daved")
      }

    )

  }
  onEdite(row: any) {
    this.employeeModel.id=row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['department'].setValue(row.department);
    this.formValue.controls['gender'].setValue(row.gender);
    this.formValue.controls['contact'].setValue(row.contact);
    this.formValue.controls['salary'].setValue(row.salary);
    
    }


    EmployeeEdit(){
      this.employeeModel.firstName = this.formValue.value.firstName;
      this.employeeModel.lastName = this.formValue.value.lastName;
      this.employeeModel.email = this.formValue.value.email;
      this.employeeModel.department = this.formValue.value.department;
      this.employeeModel.gender = this.formValue.value.gender;
      this.employeeModel.contact = this.formValue.value.contact;
      this.employeeModel.salary = this.formValue.value.salary;
   
  
      this.employee.editEmployee(this.employeeModel.id, this.employeeModel)
      .subscribe(res => {
        console.log(res);
        alert("Employee Updated")
        this.formValue.reset();
        this.getAll();
        
      },
        err => {
          alert("Data Not Update")
        }
  
      )
  
    }
    resetForm() {
      this.formValue.reset(); // Resets form fields to their initial empty state
    }
}
