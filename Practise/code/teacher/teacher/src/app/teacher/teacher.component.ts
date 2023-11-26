import { Component,OnInit } from '@angular/core';
import { TeacherModel } from './teacher.model';
import { TeacherService } from '../service/TeacherService';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit{

teacherModel: TeacherModel=new TeacherModel();
formValue !: FormGroup;
teacherData: any;
constructor(private teacher: TeacherService, private formBuilder : FormBuilder) {

}

ngOnInit(): void {
  this.formValue = this.formBuilder.group({
    name: [''],
    department: [''],
    gender: [''],
    hobby: [''],

  });

  this.getAll();

}
saveTeacher() {

    
  this.teacherModel.name = this.formValue.value.name;
  this.teacherModel.department = this.formValue.value.department;
  this.teacherModel.gender = this.formValue.value.gender;
  this.teacherModel.hobby = this.formValue.value.hobby;
  

  this.teacher.teacherPost(this.teacherModel)
    .subscribe(res => {
      console.log(res);
      alert("Teacher Added")
      this.formValue.reset();
      this.getAll();
      
    },
      err => {
        alert("Data Not save")
      }

    )
}
getAll(){
  this.teacher.getAllTeacher()
  .subscribe(res => {
    this.teacherData=res;     
    
  })
}

deleteTeacher(row:any){
  this.teacher.deleteTeacher(row.id)
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
  this.teacherModel.id=row.id;
  this.formValue.controls['name'].setValue(row.firstName);
  this.formValue.controls['department'].setValue(row.department);
  this.formValue.controls['gender'].setValue(row.gender);
  this.formValue.controls['hobby'].setValue(row.hobby);

}
TeacherEdit(){

  this.teacherModel.name = this.formValue.value.name;
  this.teacherModel.department = this.formValue.value.department;
  this.teacherModel.gender = this.formValue.value.gender;
  this.teacherModel.hobby = this.formValue.value.hobby;

  this.teacher.editTeacher(this.teacherModel.id, this.teacherModel)
  .subscribe(res => {
    console.log(res);
    alert("TeacherUpdated")
    this.formValue.reset();
    this.getAll();
    
  },
    err => {
      alert("Data Not Update")
    }

  )

}
}
