import { Component, OnInit } from '@angular/core';
import { ClocksService } from '../clock-service/clocks.service';
import { Clock }  from '../clocks-interface/clock.interface';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-clock-settings',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './clock-settings.component.html',
  styleUrl: './clock-settings.component.css'
})
export class ClockSettingsComponent implements OnInit {
  clocks: Clock[] = [];
  settingsForm: FormGroup;

  constructor(private clocksService: ClocksService, private fb: FormBuilder) {
    this.clocks = this.clocksService.getClocks();
    this.settingsForm = this.fb.group({
      index: [''],
      timeZone: ['', Validators.required],
      isAnalog: [false],
      is24Hour: [false],
      display: [true]
    });
  }

  ngOnInit(): void {
    this.clocks = this.clocksService.getClocks();
    //update index when timeZone Changes
    this.settingsForm.get('timeZone')?.valueChanges.subscribe(timeZone => {
      const clock = this.clocks.find(clock => clock.timeZone === timeZone);
      if (clock) {
        this.settingsForm.patchValue({
          index: clock.index,
          isAnalog: clock.isAnalog,
          is24Hour: clock.is24Hour,
          display: clock.display
        }, { emitEvent: false });
      } else {
        this.settingsForm.patchValue({
          index: '',
          isAnalog: false,
          is24Hour: false,
          display: true
        }, { emitEvent: false });
      }
        });
      }
  

  addClockToDisplay() : void {
    console.log(this.settingsForm.value);
    // if (this.settingsForm.valid) {
    // if (clockIndex !== undefined && clockIndex !== null && clockIndex >= 0) {
      const updatedClock: Partial<Clock> = {
        timeZone: this.settingsForm.value.timeZone,
        isAnalog: this.settingsForm.value.isAnalog,//This does not change regardless of what checkbox is checked on the form
        is24Hour: this.settingsForm.value.is24Hour,//This does not change regardless of what checkbox is checked on the form
      display: this.settingsForm.value.display,//This works
      formattedTime: '',
      };
      const clockIndex = this.clocks.findIndex(clock => clock.timeZone === updatedClock.timeZone);
      if (clockIndex !== -1) {
        this.clocksService.editClock(clockIndex, updatedClock);
      }
    // }
  }
}
