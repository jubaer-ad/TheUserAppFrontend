import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    isAdmin: new FormControl(false),
  });


  constructor(private userService: UserService) {

  }

  ngOnInit() {

  }

  OnSubmit() {
    let model = new User();
    model.firstName = this.signUpform.value.firstName ?? '';
    model.lastName = this.signUpform.value.lastName ?? '';
    model.email = this.signUpform.value.email ?? '';
    model.password = this.signUpform.value.password ?? '';
    model.phone = this.signUpform.value.phone ?? '';
    model.isAdmin = this.signUpform.value.isAdmin ?? false;

    this.userService.signUp(model);
    
  }
}
