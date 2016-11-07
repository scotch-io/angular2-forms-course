import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <div class="jumbotron text-center">
      <h4 style="margin-bottom:0">Scotch School Course Demo</h4>
      <h2>Angular 2 Forms and Validation</h2>

      <a href="https://school.scotch.io/angular-2-forms-and-validation">View Course</a>
    </div> 
    
    <h2>Template Form</h2>

    <template-form></template-form>

    <h2>Reactive Form</h2>

    <reactive-form></reactive-form>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
}