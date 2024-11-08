import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockDisplayComponent } from "./clock-display/clock-display.component";
import { ClockSettingsComponent } from "./clock-settings/clock-settings.component";
import { ClockFormComponent } from "./clock-form/clock-form.component";
import { CommonModule } from '@angular/common';
import { ClocksService } from "./clock-service/clocks.service";
import { ClocksComponent } from "./clocks/clocks.component";
import { Clock } from './clocks-interface/clock.interface';



@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, ClockDisplayComponent, ClockSettingsComponent, ClockFormComponent, ClocksComponent],
  imports: [RouterOutlet, ClockDisplayComponent, ClockSettingsComponent, ClockFormComponent, CommonModule, ClocksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  clocks: Clock[];  

  constructor(public clocksService: ClocksService) {
  this.clocks = this.clocksService.getClocks();
  } 

}
