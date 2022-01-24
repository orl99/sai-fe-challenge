import { IUser } from './../../models/user.model';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'forbes-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userInfo: IUser;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  async getUserData() {
    const userResponse = await this.authService.getUserInfo();
    if(userResponse.ok){
      this.userInfo = userResponse.response;
    }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['public/login']);
  }

}
