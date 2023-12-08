import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signInform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserService) {

  }

  ngOnInit() {

  }


  OnSubmit() {
    let signInReq: any;
    signInReq.email = this.signInform.value.email ?? '';
    signInReq.password = this.signInform.value.password ?? '';

    this.userService.signIn(signInReq);
    
  }

}
