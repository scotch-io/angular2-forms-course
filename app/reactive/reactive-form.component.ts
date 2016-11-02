import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reactive-form',
  templateUrl: './app/reactive/reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // build our form
  }

  processForm() {
    console.log('processing');
  }

}