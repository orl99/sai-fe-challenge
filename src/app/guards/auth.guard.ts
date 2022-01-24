import { AuthService } from './../services/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  async canActivate(){
    const isAuth = await this.authService.getUserInfo();
    if(!isAuth.ok) {
      this.router.navigate(['public/login']);
      return false;
    }
    return true;
  }

}
