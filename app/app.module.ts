import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { TemplateFormComponent } from './template/template-form.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent,
    TemplateFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}