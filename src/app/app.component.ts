import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//validator
import { customValidator } from './shared/custom-validator.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'age-calculator';
  ageForm: FormGroup;
  currentDate: Date = new Date();
  daysInEachMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  isLeapYear: boolean;
  yearsOfAge: number = null;
  noOfMonth: number = null;
  noOfDays: number = null;

  constructor() {
    this.inintAgeForm()
  }

  inintAgeForm() {
    this.ageForm = new FormGroup({
      birth_year: new FormControl('',[ Validators.required, Validators.min(0), Validators.max(this.currentDate.getFullYear()) ]),
      birth_day: new FormControl('',[ Validators.required, Validators.min(0), Validators.max(31) ]),
      birth_month: new FormControl('',[ Validators.required, Validators.min(1), Validators.max(12) ])
    }, { validators: customValidator });
  }

  onSubmit() {
    if(this.ageForm.valid) {
      this.leapYearCheck(this.currentDate.getFullYear());
      this.ageCalculation();
    } else {
      this.ageForm.markAllAsTouched();
    } 
  }

  leapYearCheck(year: number) {
    if (year % 4 === 0 || (year % 400 === 0 && year % 100 === 0)) {
      this.daysInEachMonth[1] = 29;
      this.isLeapYear = true;
    } else {
      this.daysInEachMonth[1] = 28;
      this.isLeapYear = false;
    }
  }

  ageCalculation() {
    // calculating days in the current year
    let currentDaySum: number = 0;
    const ageFormValue = this.ageForm.value;
    for (let i = 0; i < this.currentDate.getMonth(); i++) {
      currentDaySum += this.daysInEachMonth[i];
    }
    const daysInCurrentYear = currentDaySum + this.currentDate.getDate();
    // calculating total days from birth to now
    let birthMonthDaysSum = 0;
    for (let i = 0; i < ageFormValue.birth_month - 1; i++) {
      birthMonthDaysSum += this.daysInEachMonth[i];
    }
    const totalDaysInBirthYear = birthMonthDaysSum + ageFormValue.birth_day;
    // calculate the exact age from the birth date and today's date
    if (totalDaysInBirthYear < daysInCurrentYear) {
      this.yearsOfAge = this.currentDate.getFullYear() - ageFormValue.birth_year;
    } else {
      this.yearsOfAge = (this.currentDate.getFullYear() - ageFormValue.birth_year) - 1;
    }
    if (totalDaysInBirthYear === daysInCurrentYear) {
      this.yearsOfAge = this.yearsOfAge = this.currentDate.getFullYear() - ageFormValue.birth_year;
      this.noOfMonth = 0;
      this.noOfDays = 0;
    }
    this.countMonthsAndDay(totalDaysInBirthYear, daysInCurrentYear);
  }

  //counting month and the days of age
  countMonthsAndDay(totalDaysInBirthYear: number, daysInCurrentYear: number) {
    let countMonths: number = 0;
    let countDays: number = 0;
    let sum: number = 0;
    if (totalDaysInBirthYear > daysInCurrentYear) {
      if (this.isLeapYear) {
        countDays = Math.abs((totalDaysInBirthYear - 365)) + daysInCurrentYear;
      } else {
        countDays = Math.abs((totalDaysInBirthYear - 366)) + daysInCurrentYear;
      }
    } else {
      countDays = daysInCurrentYear - totalDaysInBirthYear;
    }

    this.daysInEachMonth.forEach((num) => {
      if(countDays > sum + num) {
        sum += num;
        countMonths++;
      } else {
         this.noOfDays = Math.abs(countDays - sum);
         this.noOfMonth = countMonths;
         return;
      }
    });
    
    console.log(this.yearsOfAge + 'years' + ' ' + this.noOfMonth + ' months' + ' ' + this.noOfDays + ' days');
  }
}
