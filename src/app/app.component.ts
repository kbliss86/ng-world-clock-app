import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClockDisplayComponent } from "./clock-display/clock-display.component";
import { ClockSettingsComponent } from "./clock-settings/clock-settings.component";
import { ClockFormComponent } from "./clock-form/clock-form.component";
import { ClocksComponent } from "./clocks/clocks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClockDisplayComponent, ClockSettingsComponent, ClockFormComponent, ClocksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'world-clock-app';
}
