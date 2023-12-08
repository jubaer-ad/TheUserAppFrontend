import { Injectable } from '@angular/core';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUsers() : User[] {
    let user = new User();
    user.firstName = "jubaer";
    user.email = "jubaerad1@gmail.com";
    user.isAdmin = true;
    user.phone = "01580353942";
    user.id = "455df4521dgdfg45";
    return [user];
  }

  public signUp(model: User) {
    console.log('In User Service');
    
    console.log(model);
    
  }
}
