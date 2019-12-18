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
}
