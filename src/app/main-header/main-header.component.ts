import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private firstName: string;
  private lastName: string;
  constructor() {
    this.firstName = 'Jonathan';
    this.lastName = 'Zepeda';
  }


showGreeting() {
  const banner = document.getElementById('banner');
  banner.innerHTML = 'Hey whats up hello ' + this.firstName + ' ' + this.lastName + '.';
  }

hideGreeting() {
  const banner = document.getElementById('banner');
  banner.innerHTML = 'r1c2';

  }





  ngOnInit() {
  }

}
