import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <!--<h2>Template Form</h2>

    <template-form></template-form>-->

    <h2>Reactive Form</h2>

    <reactive-form></reactive-form>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
}