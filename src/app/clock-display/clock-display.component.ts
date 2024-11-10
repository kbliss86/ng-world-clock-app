import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ClocksService } from '../clock-service/clocks.service';
import { Clock }  from '../clocks-interface/clock.interface';
import { CommonModule } from '@angular/common';
// import { NgIf } from '@angular/common';
// import { NgFor } from '@angular/common';
// import { get } from 'http';
import  moment  from 'moment-timezone';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-clock-display',
  standalone: true,
  // imports: [CommonModule, NgIf, NgFor],
  imports: [CommonModule],
  templateUrl: './clock-display.component.html',
  styleUrl: './clock-display.component.css'
})
export class ClockDisplayComponent implements OnInit, OnDestroy {
  @Input() displayClocks: Clock[] = [];
  // @Input() clocks: Clock[] = [];
  // private intervalId: any;
  // private subscription!: Subscription;
  private subscription = new Subscription();

  constructor(private clocksService: ClocksService) {}

ngOnInit(): void {
  this.subscription.add(
    this.clocksService.displayClocks$.subscribe((clocks) => {
      this.displayClocks = clocks;
      this.updateTime();
    }) 
  ); 
  // console.log('displayClocks', this.displayClocks);
  // console.log('clocks', this.clocks);
  // this.displayClocks = this.clocksService.getDisplayClocks().filter(clock => clock.display);
  // this.updateTime();
  // this.subscription = interval(1000).subscribe(() => this.updateTime());
  // this.intervalId = setInterval(() => {this.updateTime();}, 1000);
}

ngOnDestroy(): void {
  // this.subscription.unsubscribe();
  // if (this.intervalId) {
  // clearInterval(this.intervalId);
  }

removeClock(index: number): void {
  const updatedClock: Partial<Clock> = {
    display: false
    };
    this.clocksService.editClock(index, updatedClock);
}


updateTime(): void {
  const now = moment();
  this.displayClocks.forEach(clock => {
    const localTime = now.clone().tz(clock.timeZone);
    const formattedTime = clock.is24Hour
      ? localTime.format('HH:mm:ss')
      : localTime.format('hh:mm:ss A');

    clock.formattedTime = formattedTime;
  });
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