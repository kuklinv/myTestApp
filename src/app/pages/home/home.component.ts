import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() user;
  public title = 'myApp';
  public color = 'red';
  public myColor = 'blue';
  public myClass = 'colorBlue';
  public selectedUser;
  private _userServise;
  public users;

  constructor(ourUsers: UserService) {
    this._userServise = ourUsers;
  }

  changeColor(color) {
    this.myColor = color;
  }

  removeUser(name: string) {
    this._userServise.remove(name);
    this.users = this._userServise.getAll();
  }

  addUser(name: string) {
    this._userServise.add(name);
    this.users = this._userServise.getAll();
  }

  ngOnInit() {
    this.users = this._userServise.getAll().subscribe(users => this.users = users);
  }
}
