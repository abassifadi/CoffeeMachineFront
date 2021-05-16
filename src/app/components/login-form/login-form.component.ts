import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  identifier = '';
  constructor(private loginService: UserService, private notifier: NotifierService) { }

  ngOnInit() {
  }

  signInUser() {
    this.loginService.signInUser(this.identifier).subscribe(
      data => {
        if (data) {  this.notifier.notify('success', 'You are logged in'); } else {
          this.notifier.notify('error',
          'We could not find a user with the requested login! please check with support team to create your account') ;
        }
      },
      error => {
        this.notifier.notify('error', error.message) ;

      }
    );
  }

}
