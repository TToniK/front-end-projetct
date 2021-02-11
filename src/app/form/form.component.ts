import { Component, OnInit } from '@angular/core';
import {Person} from '../classes/person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
export class FormComponent implements OnInit {
  person: Person;

  constructor() {
    this.person = new Person();
  }

  ngOnInit() {
  }

  onSubmit(e) {
  console.log(e.value.firstName);
  console.log(e.controls.firstName.status);
  }

}
