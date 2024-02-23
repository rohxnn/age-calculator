import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-date-validity',
  template:
   ` 
   @if (control.invalid && (control.touched || control.dirty)) {
   @if (control.errors?.['required']) {
     <small class="mt-3 text-danger">{{ key }} is required</small>
   }
   @if ((control.hasError('min') || control.hasError('max')) || (control.hasError('customError')) && !control.errors?.['required']) {
     <small class="mt-3 text-danger">{{ key }} is invalid</small>
   }
 }
  `,
  standalone: true
})
export class DateValidityComponent {
  @Input()
  control: AbstractControl;
  @Input()
  key: any;
}