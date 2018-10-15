import { Component, OnInit } from '@angular/core';
import { unescapeHtml } from '@angular/platform-browser/src/browser/transfer_state';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  Course: string;
}
@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<IStudent> = [];

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
  const student = {
    id: 1,
    firstName: 'Kenny',
    lastName: 'Keys',
    Course: 'Engineering'
  };
  this.students.push(student);
}

}
