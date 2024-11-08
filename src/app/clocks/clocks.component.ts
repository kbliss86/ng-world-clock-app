import { Component, Input } from '@angular/core';
import { ClockDisplayComponent } from "../clock-display/clock-display.component";
import { Clock } from "../clocks-interface/clock.interface"

@Component({
  selector: 'app-clocks',
  standalone: true,
  imports: [ClockDisplayComponent],
  templateUrl: './clocks.component.html',
  styleUrl: './clocks.component.css'
})

export class ClocksComponent implements Clock{
  @Input({ required: true }) index!: number; 
  @Input({ required: true }) timeZone!: string;
  @Input({ required: true }) timeZoneName!: string;
  @Input({ required: true }) utcOffset!: number;
  @Input({ required: true }) formattedTime!: string;
  @Input({ required: true }) isAnalog!: boolean;
  @Input({ required: true }) is24Hour!: boolean;
  @Input({ required: true }) display!: boolean;
}
