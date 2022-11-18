import { Injectable } from '@angular/core';
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor() {
    this.students = [
      {
        controlnumber: "02400391",
        age: 38,
        career: "ISC",
        curp: "AOVI840917HNTRZS09",
        email: "iarjona@ittepic.edu.mx",
        name: "Israel Arjona Vizcaíno",
        nip: 717,
        photo: "https://picsum.photos/id/1/200/300"
      },
      {
        controlnumber: "12400391",
        age: 28,
        career: "IM",
        curp: "AOCI840917HNTRZS09",
        email: "iarjona2@ittepic.edu.mx",
        name: "Israel Arjona Castañeda",
        nip: 818,
        photo: "https://picsum.photos/id/1/200/300"
      },
      {
        controlnumber: "18401135",
        age: 22,
        career: "ISC",
        curp: "HEGE000601HNTRRDA7",
        email: "edanherreraga@ittepic.edu.mx",
        name: "Eduardo Antonio",
        nip: 919,
        photo: "https://i.pinimg.com/564x/00/f5/fa/00f5fac9a802835e1500cbcee9d9c073.jpg"
      }
    ];
  }

  public getStudents(): Student[] {
    return this.students;
  }
  public getSStudents(cn: string): Student {
    let item: Student;
    item = this.students.find((student) => {
      return student.controlnumber === cn;
    });
    return item;
  }

  public removeStudent(pos: number): Student[] {
    this.students.splice(pos, 1);
    return this.students;
  }

  public newStudent(student: Student) {
    this.students.push(student);
  }

  public updateStudent(student: Student, pos:number){
    this.students[pos]=student;
  }
}
