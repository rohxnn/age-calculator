import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'age-calculator';
  ageForm: FormGroup;
  currentDate: Date = new Date();
  monthsDay: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 31, 30, 31];
  isLeapYear: boolean;
  yearsOfAge: number = null;
  noOfMonth: number = null;
  noOfDays: number = null;

  constructor() {
    this.inintAgeForm()
  }

  inintAgeForm() {
    this.ageForm = new FormGroup({
      birth_year: new FormControl(),
      birth_day: new FormControl(),
      birth_month: new FormControl()
    });
  }
  
  leapYearCheck(year: number) {
    if (year % 4 === 0 || (year % 400 === 0 && year % 100 === 0)) {
      this.monthsDay[1] = 29;
      this.isLeapYear = true;
    } else {
      this.monthsDay[1] = 28;
      this.isLeapYear = false;
    }
  }


}
