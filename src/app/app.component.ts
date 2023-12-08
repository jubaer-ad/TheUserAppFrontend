import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { SignUpComponent } from './components/sign-up/sign-up.component'; 
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SignUpComponent, SignInComponent,AdminPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
