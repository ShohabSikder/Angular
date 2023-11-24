import { Component, OnInit } from '@angular/core';
import { TeacherModel } from './teacher.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from '../service/teacher.service';




@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css',
  
})
export class TeacherComponent implements OnInit {

  teacherModel : TeacherModel=new TeacherModel();
  formValue!: FormGroup;
  teacherData: any;
  // hobby: string[] = [
  //   'Reading',
  //   'Gardening',
  //   'Cooking',
   
  // ];

  // hobbies: { name: string, checked: boolean }[] = [
  //   { name: 'Reading', checked: false },
  //   { name: 'Gardening', checked: false },
  //   { name: 'Cooking', checked: false },
  //   // Add more hobbies as needed
  // ];

  // // Function to handle checkbox changes
  // onHobbyChange(index: number) {
  //   this.hobbies[index].checked = !this.hobbies[index].checked;
  //   // Log the updated hobbies to verify
  //   console.log('Updated hobbies:', this.hobbies);
  // }
  



  constructor(private teacher:TeacherService,private formBuilder:FormBuilder){

    
  }

// This section will need for form formcontrolName
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      department: [''],
      gender: [''],
      hobby:['']
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
      alert("Teacher Deleted")
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
    this.formValue.controls['name'].setValue(row.name);
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
        alert("Teacher Updated")
        this.formValue.reset();
        this.getAll();
        
      },
        err => {
          alert("Data Not Update")
        }
  
      )
  
    }

}
