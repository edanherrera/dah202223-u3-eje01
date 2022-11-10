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
        photo: "https://picsum.photos/10/picsum/200/300"
      },
      {
        controlnumber: "12400391",
        age: 28,
        career: "IM",
        curp: "AOCI840917HNTRZS09",
        email: "iarjona2@ittepic.edu.mx",
        name: "Israel Arjona Castañeda",
        nip: 818,
        photo: "https://picsum.photos/10/picsum/200/300"
      },
      {
        controlnumber: "18401135",
        age: 18,
        career: "IC",
        curp: "OOCI840917HNTRZS09",
        email: "iarjona3@ittepic.edu.mx",
        name: "Eduardo Antonio",
        nip: 919,
        photo: "https://picsum.photos/id/1/200/300"
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
}
