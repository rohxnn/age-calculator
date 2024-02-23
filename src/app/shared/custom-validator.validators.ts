import { FormGroup } from "@angular/forms";

export function customValidator(control: FormGroup) {
  const yearValue = +control.get('birth_year').value;
  const monthValue = +control.get('birth_month').value;
  const dayValue = +control.get('birth_day').value;
  const daysInEachMonth: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //leap year check
  if (yearValue % 4 === 0 || (yearValue % 400 === 0 && yearValue % 100 === 0)) {
    daysInEachMonth[1] = 29;
  } else {
    daysInEachMonth[1] = 28;
  }

  //date validity check
  if (dayValue > daysInEachMonth[monthValue - 1]) {
      control.get('birth_day').setErrors({ customError: true }); 
  }
  return null;
}
