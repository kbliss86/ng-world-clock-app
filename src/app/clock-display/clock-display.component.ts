import { ChangeDetectorRef, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ClocksService } from '../clock-service/clocks.service';
import { Clock }  from '../clocks-interface/clock.interface';
import { CommonModule } from '@angular/common';
import  moment  from 'moment-timezone';
import { interval, Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';



@Component({
  selector: 'app-clock-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clock-display.component.html',
  styleUrl: './clock-display.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockDisplayComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() displayClocks: Clock[] = [];
  private subscription = new Subscription();
  private destroy$ = new Subject<void>();

  //Analog clock hands
  @ViewChild('hourHand', { static: false }) hourHand!: ElementRef;
  @ViewChild('minuteHand', {static: false}) minuteHand!: ElementRef;
  @ViewChild('secondHand', {static: false}) secondHand!: ElementRef;

  constructor(private clocksService: ClocksService, private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {}


ngOnInit(): void {
  console.log('ClockDisplayComponent: ngOnInit');
  if (isPlatformBrowser(this.platformId)) {
    this.subscription.add(
      interval(1000).subscribe(() => this.updateTime())
    );
  this.subscription.add(
    this.clocksService.displayClocks$.subscribe((clocks) => {
      this.displayClocks = clocks;
      this.updateTime();

      if (this.displayClocks && this.displayClocks.length > 0) {
        this.updateSunriseSunset();
      }
    }) 
  );
      this.cdr.detectChanges();
    };
  }

ngAfterViewInit(): void {
  console.log('ClockDisplayComponent: ngAfterViewInit');
  if (isPlatformBrowser(this.platformId)) {
    this.subscription.add(
  interval(1000).subscribe(() => this.updateTime())
  );
  }
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
  this.destroy$.next();
  this.destroy$.complete();
  }

removeClock(index: number): void {
  const updatedClock: Partial<Clock> = {
    display: false
    };
    this.clocksService.editClock(index, updatedClock);
}


updateTime(): void {
  if (isPlatformBrowser(this.platformId)) {
  const now = moment();
  this.displayClocks.forEach(clock => {
    if (clock.display) {
    const localTime = now.clone().tz(clock.timeZone);
    const formattedTime = clock.is24Hour
      ? localTime.format('HH:mm:ss')
      : localTime.format('hh:mm:ss A');

    clock.formattedTime = formattedTime;
    
  if (clock.isAnalog) {
    this.updateAnalogClock(localTime);
  }
}
  });
  this.cdr.markForCheck();
  
}
}

private updateAnalogClock(localTime: moment.Moment): void {
  localTime.format('hh:mm:ss A');
  if (isPlatformBrowser(this.platformId) && this.hourHand && this.minuteHand && this.secondHand) {
    const hours = localTime.hour();
    const minutes = localTime.minute();
    const seconds = localTime.second();
    this.secondHand.nativeElement.style.transform = `rotate(${seconds * 6}deg)`;
    this.minuteHand.nativeElement.style.transform = `rotate(${minutes * 6}deg)`;
    this.hourHand.nativeElement.style.transform = `rotate(${hours * 30 + minutes * 0.5}deg)`;
  }
}

updateSunriseSunset(): void {
this.displayClocks.forEach(clock => {
  if (clock.display) {

const now = moment();
const lat = clock.latitude;
const long = clock.longitude;
const times = this.clocksService.getSunTimes(now.toDate(), lat, long);

const timeZone = clock.timeZone;
const sunrise = moment(times.sunrise).tz(timeZone).format('hh:mm A');
const sunset = moment(times.sunset).tz(timeZone).format('hh:mm A');

clock.sunrise = sunrise;
clock.sunset = sunset;

console.log('sunrise', sunrise);
console.log('sunset', sunset);
  }
});
}
}