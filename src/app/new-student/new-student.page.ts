import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { PreloadingStrategy } from '@angular/router';
@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  public student:Student;
  public myForm:FormGroup;
  public validationMessages: Object;
  constructor(private studentService:StudentService, private fb:FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      controlNumber:["",Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(8), Validators.pattern('^[0-9]+$')])]
    });
    this.validationMessages = {
      'controlNumber':[
        {type: 'required', message:"Número de control obligatorio"},
        {type: 'minlength', message:"El Número de control 8 carácteres mínimo"},
        {type: 'maxlength', message:"El Número de control 8 carácteres maximo"},
        {type: 'pattern', message:"Solo números"}        
      ]
    }
  }

  public newStudent(){
    // ! Contruir el objeto
    this.studentService.newStudent(this.student);
  }

}
