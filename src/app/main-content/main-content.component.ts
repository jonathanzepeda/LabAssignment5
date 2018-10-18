import { Component, OnInit } from '@angular/core';
import { unescapeHtml } from '@angular/platform-browser/src/browser/transfer_state';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  Course: string;
}
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {



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
  const student = {
    id: null,
    firstName: null,
    lastName: null,
    Course: null
  };

  // this.students.push(student);
  this.students.unshift(student);
}

removeStudent(index: number) {
  console.log('from removeStudent function index: ', index);
  this.students.splice(index, 1);
  }

saveStudent() {
  this.editMode = false;
  }
}
