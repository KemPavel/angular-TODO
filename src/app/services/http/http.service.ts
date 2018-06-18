import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../../models/user';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get('assets/data/users.json').map((data: {userList: User[]}) => {
      let userList = data.userList;
      return userList.map((user: User) => {
        return { name: user.name, age: user.age };
      });
    }).catch((error: Error) => {
      console.error(error);
      return Observable.throw(error);
    })
  }
}
