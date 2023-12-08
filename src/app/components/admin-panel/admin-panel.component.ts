import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  title = 'TheUserAppFrontend.App';

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(){
    this.users = this.userService.getUsers();
  }

}
