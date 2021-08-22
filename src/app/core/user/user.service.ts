import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from './user';
import {TokenService} from '../token/token.service';

import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private subjectUser = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken()
    && this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.subjectUser.asObservable();
  }

  getUserName() {
    return this.userName;
  }
  decodeAndNotify() {
    const user = jwt_decode.decode(this.tokenService.getToken()) as User;
    this.userName = user.name;
    this.subjectUser.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.subjectUser.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

}
