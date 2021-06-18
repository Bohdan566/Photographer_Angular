import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  findAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.url + '/users');
  }

  findUser(id: number): Observable<User>{
    return this.httpClient.get<User>(this.url + '/users/' + id);
  }
}
