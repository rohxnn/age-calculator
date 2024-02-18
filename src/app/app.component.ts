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
  monthsDay: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
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

  onSubmit() {
    this.leapYearCheck(this.currentDate.getFullYear());
    this.ageCalculation();
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

  ageCalculation() {
    // calculating days in the current year
    let currentDaySum: number = 0;
    const ageFormValue = this.ageForm.value;
    for (let i = 0; i < this.currentDate.getMonth(); i++) {
      currentDaySum += this.monthsDay[i];
    }
    const daysInCurrentYear = currentDaySum + this.currentDate.getDate();
    // calculating total days from birth to now
    let birthMonthDaysSum = 0;
    for (let i = 0; i < ageFormValue.birth_month - 1; i++) {
      birthMonthDaysSum += this.monthsDay[i];
    }
    const daysInBirthYear = birthMonthDaysSum + ageFormValue.birth_day;
    // calculate the exact age from the birth date and today's date
    if (daysInBirthYear < daysInCurrentYear) {
      this.yearsOfAge = this.currentDate.getFullYear() - ageFormValue.birth_year;
    } else {
      this.yearsOfAge = (this.currentDate.getFullYear() - ageFormValue.birth_year) - 1;
    }
    if (daysInBirthYear === daysInCurrentYear) {
      this.yearsOfAge = this.yearsOfAge = this.currentDate.getFullYear() - ageFormValue.birth_year;
      this.noOfMonth = 0;
      this.noOfDays = 0;
    }
    this.countMonthAndDay(daysInBirthYear, daysInCurrentYear);
  }

  //counting month and the days of age
  countMonthAndDay(daysInBirthYear: number, daysInCurrentYear: number) {
    let countMonth: number = 0;
    let countDay: number = 0;
    let sum: number = 0;
    if (daysInBirthYear > daysInCurrentYear) {
      if (this.isLeapYear) {
        countDay = Math.abs((daysInBirthYear - 365)) + daysInCurrentYear;
      } else {
        countDay = Math.abs((daysInBirthYear - 366)) + daysInCurrentYear;
      }
    } else {
      countDay = daysInCurrentYear - daysInBirthYear;
    }

    this.monthsDay.forEach((num) => {
      if(countDay >= sum + num) {
        sum += num;
        countMonth++;
      } else {
         this.noOfDays = Math.abs(countDay - sum);
         this.noOfMonth = countMonth;
         return;
      }
    });
    
    console.log(this.yearsOfAge + 'years' + ' ' + this.noOfMonth + ' months' + ' ' + this.noOfDays + ' days');
  }
}
