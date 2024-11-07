import { Component } from '@angular/core';
import { ClockFormComponent } from "../clock-form/clock-form.component";

@Component({
  selector: 'app-clock-settings',
  standalone: true,
  imports: [ClockFormComponent],
  templateUrl: './clock-settings.component.html',
  styleUrl: './clock-settings.component.css'
})
export class ClockSettingsComponent {

}
