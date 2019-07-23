import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.builder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    if (username === 'admin' && password === 'admin') {
      //TODO: take the localstorage to a service
      //TODO: redirection done with window.location has to change
      //      in accordance to the app-routing.module.ts TODO
      localStorage.setItem('user', username)
      window.location.href = '/'
      // this.router.navigate(['/'])
    }
  }

}
