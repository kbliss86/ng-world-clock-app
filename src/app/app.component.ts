import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockDisplayComponent } from "./clock-display/clock-display.component";
import { ClockSettingsComponent } from "./clock-settings/clock-settings.component";
import { CommonModule } from '@angular/common';
import { ClocksService } from "./clock-service/clocks.service";
import { Clock } from './clocks-interface/clock.interface';




@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, ClockDisplayComponent, ClockSettingsComponent, ClockFormComponent, ClocksComponent],
  imports: [RouterOutlet, ClockDisplayComponent, ClockSettingsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  clocks: Clock[];
  currentHour: number = new Date().getHours();
  manualHour: number | null = null;

  constructor(public clocksService: ClocksService) {
  this.clocks = this.clocksService.getDisplayClocks();
  }

  //function to determine the current time bucket (increments of 6 hours)
  getTimeBucket(): string {
    const hour = this.manualHour !== null ? this.manualHour : this.currentHour;
    if (hour >= 22 || hour < 4) {
      return 'night';
    } else if 
      (hour >= 4 && hour < 10) {
      return 'dawn';
    } else if 
      (hour >= 10 && hour < 16) {
      return 'day';
    } else {
      return 'dusk';
    } 
  }

  //function to set the manual hour
  setManualHour(event: any): void {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0 && value < 23) {
      this.manualHour = value;
    }
  }

}
