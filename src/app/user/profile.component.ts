
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {

  }

  ngOnInit() {
        const firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required,
          Validators.pattern('[a-zA-Z].*')]);
        const lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

        this.profileForm = new FormGroup({
          firstName: firstName,
          lastName: lastName
        });
      }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    .subscribe(() => {
      this.toastr.success('Profile Saved');
    });

    // this.router.navigate(['events']);
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

  validateFirstName() {
    return this.profileForm.controls.firstName.valid || this.profileForm.controls.firstName.untouched;
  }

  validateLastName() {
    return this.profileForm.controls.lastName.valid || this.profileForm.controls.lastName.untouched;
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }
}
