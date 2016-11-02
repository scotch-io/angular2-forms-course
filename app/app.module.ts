import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TemplateFormComponent } from './template/template-form.component';
import { ReactiveFormComponent } from './reactive/reactive-form.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}