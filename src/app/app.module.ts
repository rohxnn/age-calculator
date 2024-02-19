import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
//module
import { AppRoutingModule } from './app-routing.module';
//component
import { AppComponent } from './app.component';
import { DayValidityCheckerComponent } from './shared/day-validity-checker/day-validity-checker.component';
import { YearValidityCheckerComponent } from './shared/year-validity-checker/year-validity-checker.component';


@NgModule({
  declarations: [
    AppComponent,
    DayValidityCheckerComponent,
    YearValidityCheckerComponent
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
