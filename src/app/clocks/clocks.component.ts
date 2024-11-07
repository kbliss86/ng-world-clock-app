import { Component } from '@angular/core';
import { ClockDisplayComponent } from "../clock-display/clock-display.component";

@Component({
  selector: 'app-clocks',
  standalone: true,
  imports: [ClockDisplayComponent],
  templateUrl: './clocks.component.html',
  styleUrl: './clocks.component.css'
})
export class ClocksComponent {

}
