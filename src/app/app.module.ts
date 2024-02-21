import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
//module
import { AppRoutingModule } from './app-routing.module';
//component
import { AppComponent } from './app.component';
import { DateValidityComponent } from './shared/date-validity/date-validity.component';



@NgModule({
  declarations: [
    AppComponent,
    DateValidityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
