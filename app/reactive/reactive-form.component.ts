import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './app/reactive/reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup;
  nameError: string;
  usernameError: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // build our form
    this.form = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
      username: ['', Validators.minLength(3)]
    });

    // watch for changes and validate
    this.form.valueChanges.subscribe(data => {
      console.log(data);

      this.nameError     = '';
      this.usernameError = '';

      let name     = this.form.get('name');
      let username = this.form.get('username');

      if (name.invalid && name.dirty) {
        if (name.errors['required'])
          this.nameError = 'Name is required.';

        if (name.errors['minlength'])
          this.nameError = 'Name must be at least 3 characters.';

        if (name.errors['maxlength'])
          this.nameError = 'Name can\'t be more than 6 characters.';
      }

      if (username.invalid && username.dirty) {
        if (username.errors['required'])
          this.usernameError = 'Username is required.';

        if (username.errors['minlength'])
          this.usernameError = 'Username must be at least 3 characters.';
      }
    });
  }

  processForm() {
    console.log('processing', this.form.value);
  }

}