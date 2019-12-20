import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users = [
    {name: 'John'},
    {name: 'Ivan'},
    {name: 'Sara'}
  ];

  constructor(private _http: HttpClient) {
  }

  public getAll() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  public remove(name) {
    return this.users = this.users.splice(this.users.indexOf(name), 1); // TODO: not work!!!!
  }

  public add(name: string) {
    this.users.push({name});
  }

}
