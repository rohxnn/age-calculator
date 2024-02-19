import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-day-validity-checker',
  template: `<ng-container *ngIf="control.invalid && (control.touched || control.dirty)" >
             <small *ngIf="control.errors?.required" class="mt-3 text-danger">{{key}} is required</small>
             </ng-container>`
})
export class DayValidityCheckerComponent {
@Input()
control: any;
@Input()
key: any;
}
