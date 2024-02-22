import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-date-validity',
  template:  ` <ng-container *ngIf="control.invalid && (control.touched || control.dirty)">
               <small *ngIf="control.errors?.['required']" class="mt-3 text-danger">{{ key }} is required</small>
               <small *ngIf="(control.hasError('min') || control.hasError('max') || control.hasError('customError')) && !control.errors?.['required']" class="mt-3 text-danger">{{ key }} is invalid</small>
               </ng-container>    
             `
})
export class DateValidityComponent {
@Input()
control: AbstractControl;
@Input()
key: any;
}