import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './app/reactive/reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;

  constructor() {}

  ngOnInit() {
    // build our form
    this.form = new FormGroup({
      name: new FormControl(''),
      username: new FormControl('')
    });

    console.log(this.form);
  }

  processForm() {
    console.log('processing', this.form.value);
  }

}