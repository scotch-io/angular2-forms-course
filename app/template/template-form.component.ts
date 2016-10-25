import { Component, OnInit } from '@angular/core';

export class User {
  name: string;
  username: string;
}

@Component({
  selector: 'template-form',
  styleUrls: ['./app/template/template-form.component.css'],
  templateUrl: './app/template/template-form.component.html'
})
export class TemplateFormComponent implements OnInit {
  user: User;
  submitted: boolean = false;   // check if the form is submitted

  ngOnInit() {
    this.user = {
      name: '',
      username: ''
    };
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }

  processForm() {
    console.log(this.user);
    this.submitted = true;

    // create a user
    // this.service.createUser(this.user)...
  }

}