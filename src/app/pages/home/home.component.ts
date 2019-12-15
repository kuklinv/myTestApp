import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  @Input() user;
  public title = 'myApp';
  public color = 'red';
  public myColor = 'blue';
  public myClass = 'colorBlue';
  public users = [
    {name: 'John'},
    {name: 'Ivan'},
    {name: 'Sara'}
  ];
  public  selectedUser;

  changeColor(color) {
    this.myColor = color;
  }

  ngOnInit() {
  }
}
