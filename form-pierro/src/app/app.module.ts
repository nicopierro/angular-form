import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { FormDemoComponent } from './form-demo/form-demo.component';
import { MultipleFormControlsComponent } from './multiple-form-controls/multiple-form-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent,
    MultipleFormControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
