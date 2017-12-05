import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    ` input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }`
  ]
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  constructor(@Inject('auth') private service,
                private router: Router) {
  }
  fLogin(formValue) {
    console.log('auth result is: ' + this.service.loginWithCredentials(formValue.login.username, formValue.login.password));
    localStorage.setItem('userId', formValue.login.name);
    this.router.navigate(['/going/yes']);
  }
  ngOnInit() {
  }
}
