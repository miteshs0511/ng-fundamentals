import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginInValid = false;

    userName;
    password;
    mouseoverLogin;
    constructor(private authService: AuthService, private route: Router) {

    }


    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        .subscribe(resp => {
            if (!resp) {
                this.loginInValid = true;
            } else {
                this.route.navigate(['events']);
            }
        });
        // console.log(formValues);
    }

    cancel() {
        this.route.navigate(['events']);
    }


}
