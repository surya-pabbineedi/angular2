import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PickerComponent } from './shared/picker/picker.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TypeaheadModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AlertModule, TypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
