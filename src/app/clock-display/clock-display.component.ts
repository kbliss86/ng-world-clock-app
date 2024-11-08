import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ClocksService } from '../clock-service/clocks.service';
import { Clock }  from '../clocks-interface/clock.interface';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { get } from 'http';
import  moment  from 'moment-timezone';

@Component({
  selector: 'app-clock-display',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './clock-display.component.html',
  styleUrl: './clock-display.component.css'
})
export class ClockDisplayComponent implements OnInit, OnDestroy {
  @Input() clocks: Clock[] = [];
  // clocks: Clock[] = [];
  // currentTime: { [key: number]: string } = {};
  private intervalId: any;

  constructor(private clocksService: ClocksService) { }

ngOnInit(): void {
  this.clocks = this.clocksService.getClocks().filter(clock => clock.display);
  this.updateTime();
  // this.intervalId = setInterval(() => this.updateTime(), 600000);
}

ngOnDestroy(): void {
  clearInterval(this.intervalId);
}

updateTime(): void {
  this.clocks.forEach(clock => {
    const now = moment().tz(clock.timeZone);
    const formattedTime = clock.is24Hour
      ? now.format('HH:mm')
      : now.format('hh:mm A');

    clock.formattedTime = formattedTime;
  });

// updateTime(): void {
//   const now = new Date();
//   this.clocks.forEach(clock => {
//     // const updatedTime = new Date(now);
//     const hours = now.getUTCHours() + clock.utcOffset;
//     const minutes = now.getUTCMinutes();
//     const formattedTime = clock.is24Hour ? `${this.formatNumber(hours)}:${this.formatNumber(minutes)}` : this.format12Hour(hours, minutes);
//   // updatedTime.setHours(now.getUTCHours() + clock.utcOffset);
//   clock['formattedTime'] = formattedTime;
// });
}

//helper function to display the time in the correct format
private formatNumber(num: number): string {
  return num < 10 ? `0${num}` : num.toString();
}

//helper function to format hours and minutes for 12-hour clock
private format12Hour(hours: number, minutes: number): string {
  const adjustedHours = (hours % 12) || 12;
  const period = hours >= 12 ? 'PM' : 'AM';
  return `${adjustedHours}:${this.formatNumber(minutes)} ${period}`;
}  
}