import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private userService: UserService, private route: Router) {}
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  onLogin() {
    this.userService.login(this.loginForm.value).subscribe((res) => {
      if (res.isMatched) {
        alert(res.message);
        this.route.navigate(['/userlist']);
      }
       else {
        alert(res.message);
      }
    });

  }
}
