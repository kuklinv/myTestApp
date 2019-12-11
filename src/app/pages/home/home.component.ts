import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title = 'myApp';
  public color = 'red';
  public myColor = 'blue';
  public myClass = 'colorBlue';
  // public textSize = 150;
  changeColor(color){
    this.myColor = color;
  }
  constructor() {

  }
  ngOnInit() {
  }
}
