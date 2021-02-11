import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.styl']
})

export class ReactiveFormComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName: ['Toni', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-zÀ-ž\\s]*$')]],
      lastName: ['Kari', [Validators.required, Validators.minLength(2), Validators.pattern('^[A-zÀ-ž\\s]*$')]],
      personId: ['11111111', [Validators.required,
        /*Validators.pattern('^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])([5-9]\d\+|\d\d-|[01]\dA)\d{3}[\dA-Z]$')*/]],
      eMail: ['joo@hotmail.com', [Validators.required, Validators.email]],
      userName: ['Testings', [Validators.required, Validators.minLength(6), Validators.pattern('^[A-zÀ-ž\\s]*$')]],
      password: ['Qwerty12345.', [Validators.required, Validators.minLength(10),
        Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$')]],
      confirmPassword: ['Qwerty12345.', [Validators.required]],
      termsAndConditions: ['', [Validators.requiredTrue]]
    });
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get personId() {
    return this.profileForm.get('personId');
  }

  get eMail() {
    return this.profileForm.get('eMail');
  }

  get userName() {
    return this.profileForm.get('userName');
  }

  get password() {
    return this.profileForm.get('password');
  }

  get confirmPassword() {
    return this.profileForm.get('confirmPassword');
  }

  get termsAndConditions() {
    return this.profileForm.get('termsAndConditions');
  }

  onSubmit() {
    this.profileForm.reset();
  }
}
