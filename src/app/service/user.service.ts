// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
export class UserService {
  public users = [
    {name: 'John'},
    {name: 'Ivan'},
    {name: 'Sara'}
  ];

  constructor() {
  }

  public getAll() {
    return this.users;
  }

  public remove(name) {
    return this.users = this.users.splice(this.users.indexOf(name), 1); // TODO: not work!!!!
  }

  public add(name: string) {
    this.users.push({name});
  }

}
