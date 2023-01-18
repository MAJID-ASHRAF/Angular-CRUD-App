import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}
  singUpForm!: FormGroup;
  editUser!: string;
  updateUser: boolean = false;

  ngOnInit(): void {
    this.singUpForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        this.noSpaceAllowed,
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        this.noSpaceAllowed,
      ]),
      age: new FormControl(null, Validators.required),
      contact: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
    this.activatedRoute.queryParamMap.subscribe((parm) => {
      this.editUser = String(parm.get('email'));
    });
    this.activatedRoute.queryParamMap.subscribe((parm) => {
      this.updateUser = Boolean(parm.get('edit'));
    });

    if (this.updateUser) {
      this.userService.finduser(this.editUser).subscribe((userData) => {
        setTimeout(() => {
          this.singUpForm.setValue({
            firstName: userData.firstName,
            lastName: userData.lastName,
            age: userData.age,
            contact: userData.contact,
            email: userData?.email,
            password: userData?.password,
          });
        }, 1000);
      });
    }
  }

  //when submit is clicked
  onSubmit() {
    if (this.updateUser) {
      this.userService
        .updateUser(this.editUser, this.singUpForm.value)
        .subscribe();
    } else {
      this.userService.addUser(this.singUpForm.value).subscribe((res) => {
        if (res.avaible) {
          alert(res.message);
        }else{
          alert(res.message)
        }
      });
    }

    this.singUpForm.reset();
    this.singUpForm.markAsPristine();
    this.singUpForm.markAsUntouched();
  }
  //custom validation
  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }
  //snackBar
  openSnackBar(message: string, action: any) {
    this.snackBar.open(message, action);
  }
}
