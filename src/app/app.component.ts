import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sai-fe-challenge';


  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    // this.isAuth();
  }

  private async isAuth() {
    this.router.navigate(['/public/login']);
  }
}
