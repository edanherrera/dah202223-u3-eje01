import { Component, OnInit } from '@angular/core';
import { Student } from "../models/student";
import { StudentService } from '../services/student.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  public student: Student;
  public myForm:FormGroup;
  public validationMessages: Object;
  public careers:string[]=['ISC','IQ','IBQ','ARQ','IC','IG','IE','IM','LA','IT'];
  public sUpdate: Student[];
  constructor(private studentService:StudentService, private aRoute: ActivatedRoute, private fb:FormBuilder){ 
    this.sUpdate = this.studentService.getStudents();
 
  }
  
  ngOnInit() {
    this.aRoute.queryParams.subscribe((params)=>{
      console.log(params);
      this.student = this.studentService.getSStudents(params.controlnumber);
    });

    this.myForm = this.fb.group({
      // ? Rules Control number
      controlNumber:["",Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(8), Validators.pattern('^[0-9]+$')])],
      // ? Rules Name
      name:["",Validators.required],
      // ? Rules CURP
      curp:["",Validators.compose([Validators.required, Validators.pattern('^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}'+
      '(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])'+
      '[HM]{1}'+
      '(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)'+
      '[B-DF-HJ-NP-TV-Z]{3}'+
      '[0-9A-Z]{1}'+
      '[0-9]{1}$')])],
      // ? Rules Age
      'age':["",Validators.compose([Validators.required,Validators.min(18)])],
      // ? Rules NIP
      'nip':["",Validators.compose([Validators.required,Validators.min(10),Validators.max(10000)])],
      // ? Rules EMAIL
      'email':["",Validators.compose([Validators.required,Validators.email])],
      // ? Rules CAREER
      'career':["",Validators.required],
      // ? Rules URL
      // ! Test: https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg
      'photo':["", Validators.compose([Validators.required,Validators.pattern('^(ftp|http|https){1}'+
      '[:]{1}'+
      '[/]{2}'+
      '[a-zA-Z0-9@:%._\+~#=]{2,256}'+
      '[.]{1}'+
      '[a-z]{2,6}'+
        '[a-zA-Z0-9@:%._\+~#&?=/-]*$')])]
    });
    this.validationMessages = {
            // ? Validation Message controlnumber
      'controlNumber': [
        {type: 'required', message:"Número de control obligatorio"},
        {type: 'minlength', message:"El Número de control 8 carácteres mínimo"},
        {type: 'maxlength', message:"El Número de control 8 carácteres maximo"},
        {type: 'pattern', message:"Solo números"}        
      ],
            // ? Validation Message NAME
      'name': [
        {type: 'required', message:"Nombre obligatorio"}
      ],
            // ? Validation Message CURP
      'curp': [
        {type: 'required', message: "CURP obligatoria "},
        {type: 'pattern', message:"Formato incorrecto"}
      ],
            // ? Validation Message AGE
      'age': [
        {type: 'required', message: "Edad obligatoria "},
        {type: 'min', message: "La edad minima es 18"}
      ],
            // ? Validation Message NIP
      'nip': [
        {type: 'required', message: "NIP obligatorio"},
        {type: 'min', message: "NIP incorrecto"},
        {type: 'max', message: "NIP incorrecto"}
      ],
            // ? Validation Message EMAIL
      'email': [
        {type: 'required', message: "Correo Obligatorio"},
        {type: 'email', message: "Correo invalido"}
      ],
            // ? Validation Message CAREER
      'career':[
        {type: 'required', message: "Carrera obligatoria"}
      ],
           // ? Validation Message PHOTO
      'photo': [
        {type: 'required', message: "url obligatoria "},
        {type: 'pattern', message:"URL incorrecta (ej. https://www.picsum.photos/id/1/200/300)"}
      ]
    }
  }
  public updateStudent(){
    for (let i = 0; i < this.sUpdate.length; i++) {
      if(this.sUpdate[i].controlnumber.includes(this.student.controlnumber)){
        console.log('Se actualizó con éxito');
        this.studentService.updateStudent(this.student,i);
      }else{
        console.log('No se encontró el registro');
        
      }
    }
  }
}
