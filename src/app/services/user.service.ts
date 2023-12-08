import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  signIn(signInReq: any) {
    console.log('In User Service');
    
    this.http.get("https://localhost:7171/api/user/login").subscribe((res) => {
      console.log(res);
      
    })
    console.log(signInReq);
  }

  constructor(private http: HttpClient) { }

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
    
    this.http.get("https://localhost:7171/api/user/users").subscribe((res) => {
      console.log(res);
      
    })
    console.log(model);
    
  }
}
