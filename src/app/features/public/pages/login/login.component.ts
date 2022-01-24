import { AuthService } from './../../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


interface IAuth {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForbaseForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  public errorMessage: string;
  public authError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public async login() {
    if(!this.loginForbaseForm.valid) {
      this.authError = true;
      this.errorMessage = 'Please fill correctly your username and password ';
      return;
    }
    const userCredentials: IAuth = this.loginForbaseForm.value;
    const userAuth = await this.authService.authUser(userCredentials.username, userCredentials.password);
    if(!userAuth.ok) {
      this.authError = true;
      this.errorMessage = userAuth.error.error;
      return;
    }
    this.router.navigate(['private/articles']);
  }

}
