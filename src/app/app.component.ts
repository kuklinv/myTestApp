import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public user = {
    name: 'Vitaly'
  };
  public isShown = true;

  toggle() {
    this.isShown = !this.isShown;
  }

  constructor() {

  }

  ngOnInit() {
  }
}
