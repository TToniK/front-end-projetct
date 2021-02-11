import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.styl']
})
export class AdminComponent implements OnInit {
  loginForm: FormGroup;
  eMail: string;
  password: string;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      eMail: ['joo@hotmail.com', [Validators.required, Validators.email]],
      password: ['qwerty', [Validators.required, Validators.minLength(10),
        Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$')]],
    });
  }

  get eMailInput() {
    return this.loginForm.get('eMail');
  }
  get passwordInput() {
    return this.loginForm.get('password');
  }

  cancelNavigate() {
    this.router.navigate(['']);
  }

  autenthicate() {
    this.authService.login(this.eMail, this.password);
  }
}
