import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-validity',
  template:  ` <ng-container *ngIf="control.invalid && (control.touched || control.dirty)" >
               <small *ngIf="control.errors?.required" class="mt-3 text-danger">{{key}} is required</small>
               <small *ngIf="(control.hasError('min') || control.hasError('max') || control.hasError('invalidDate')) && !control.errors?.required" class="mt-3 text-danger">{{key}} is invalid</small>
               {{control.hasError('invalidDate')}}
               </ng-container>
             `
})
export class DateValidityComponent {
@Input()
control: any;
@Input()
key: any;
}