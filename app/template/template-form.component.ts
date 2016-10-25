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

  ngOnInit() {
    this.user = {
      name: 'Chris',
      username: 'sevilayha'
    };
  }

  get diagnostic() {
    return JSON.stringify(this.user);
  }

}