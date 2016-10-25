import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { TemplateFormComponent } from './template/template-form.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent,
    TemplateFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}