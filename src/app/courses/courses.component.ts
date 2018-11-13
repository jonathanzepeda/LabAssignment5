import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  Course: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  students: Array<IStudent> = [];

  editMode = false;

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Jonathan',
      lastName: 'Zepeda',
      Course: 'Programming'
    };
    this.students[1] = {
      id: 1,
      firstName: 'Brooke',
      lastName: 'Herrera',
      Course: 'Nursing'
    };
    this.students[2] = {
      id: 1,
      firstName: 'Melissa',
      lastName: 'Zepeda',
      Course: 'Psychology'
    };
  }

  ngOnInit() {
  }

  addStudent() {
    this.editMode = true;
    const student: IStudent = {
      id: null,
      firstName: null,
      lastName: null,
      Course: null
    };

    this.editMode = true;
    this.students.unshift(student);
  }

  removeStudent(index: number) {
    console.log('from removeStudent function index: ', index);
    this.students.splice(index, 1);
  }

  saveStudent(student: IStudent) {
    this.editMode = false;
  }

}
